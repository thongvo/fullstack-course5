/**
 * Created by vhthong on 13/10/2016.
 */
(function() {
    'use strict';

    angular.module('CounterApp', [])
        .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope'];
    function CounterController($scope) {
        $scope.onceCounter = 0;
        $scope.counter = 0;
        $scope.name = "Thong";

        $scope.showNumberOfWatchers = function() {
            console.log("# of watchers: " + $scope.$$watchersCount);
        };

        $scope.countOnce = function () {
            $scope.onceCounter = 1;
        };

        $scope.upCounter = function () {
            $scope.counter++;
        };

        //$scope.$watch('onceCounter', function (newValue, oldValue) {
        //    console.log("Oncecounter old value: " + oldValue);
        //    console.log("Oncecounter new value: " + newValue);
        //});
        //
        //$scope.$watch('counter', function (newValue, oldValue) {
        //    console.log("Counter old value: " + oldValue);
        //    console.log("Counter new value: " + newValue);
        //});

        $scope.$watch(function () {
            console.log("Digest loop fired!")
        })
    };
}) ();