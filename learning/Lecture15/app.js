/**
 * Created by vhthong on 13/10/2016.
 */
(function () {
    'use strict';

    angular.module('CounterApp', [])
        .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope', '$timeout'];
    function CounterController($scope, $timeout) {
        $scope.counter = 0;

        $scope.upCounter = function () {
            $timeout(function () {
                $scope.counter++;
                console.log("Counter incremented...");
            }, 2000);
        };


        //$scope.upCounter = function () {
        //    setTimeout(function () {
        //        $scope.counter++;
        //        console.log("Counter incremented...");
        //    }, 2000);
        //};

        //$scope.upCounter = function () {
        //    setTimeout(function () {
        //        $scope.$apply(function () {
        //            $scope.counter++;
        //            console.log("Counter incremented...");
        //        });
        //    }, 2000);
        //};

        //$scope.$watch('onceCounter', function (newValue, oldValue) {
        //    console.log("Oncecounter old value: " + oldValue);
        //    console.log("Oncecounter new value: " + newValue);
        //});
        //
        //$scope.$watch('counter', function (newValue, oldValue) {
        //    console.log("Counter old value: " + oldValue);
        //    console.log("Counter new value: " + newValue);
        //});

    };
})();