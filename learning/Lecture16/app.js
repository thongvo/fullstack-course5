/**
 * Created by vhthong on 13/10/2016.
 */
(function() {
    'use strict';

    angular.module('BindingApp', [])
        .controller('BindingController', BindingController);

    BindingController.$inject = ['$scope'];

    function BindingController($scope) {
        $scope.firstName = "Thong";
        //$scope.fullName = "";

        $scope.showNumberOfWatchers = function() {
            console.log("# of watchers: " + $scope.$$watchersCount);
        };

        $scope.setFullName = function () {
            $scope.fullName = $scope.firstName + " " + "Vo Hoang";
        };

        $scope.logFirstName = function () {
            console.log("First name is: " + $scope.firstName);
        };

        $scope.logFullName = function () {
            console.log("Full name is: " + $scope.fullName);
        };
    };
}) ();