/**
 * Created by vhthong on 14/10/2016.
 */

(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.list;
        var numsOfFood;
        $scope.message;
        $scope.color;
        $scope.format;

        function parseStringToNum(parseString) {
            var arrayString = parseString.split(",");
            return arrayString.length;
        }
        $scope.checkIfTooMuch = function () {
            if (!$scope.list) {
                $scope.color = "red";
                $scope.format = "empty";
                $scope.message = "Please enter data first";
            }
            else {
                $scope.format = "enjoy";
                numsOfFood = parseStringToNum($scope.list);
                if (numsOfFood > 3) {
                    $scope.color = "green";
                    $scope.message = "Too much!";
                } else {
                    $scope.color = "green";
                    $scope.message = "Enjoy!";
                }
            }

        }
    };



}) ();