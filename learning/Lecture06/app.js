/**
 * Created by vhthong on 12/10/2016.
 */
(function () {
    'use strict';

    angular.module('NameCalculator', [])

        .controller('NameCalculatorController', function($scope) {
            $scope.name = "";
            $scope.totalValue = 0;

            $scope.displayNumeric = function() {
                var totalNameValue = calculateNumbericForString($scope.name); //get the total value
                $scope.totalValue = totalNameValue;
            };

            function calculateNumbericForString(string) {
                var totalStringValue = 0;
                for (var i = 0; i < string.length; i++) {
                    totalStringValue += string.charCodeAt(i);
                }

                return totalStringValue;
            };
        });
})();