/**
 * Created by vhthong on 13/10/2016.
 */
(function() {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController)
        .filter('love', LovesFilter)
        .filter('truth', TruthFilter);

    MsgController.$inject = ['$scope', 'loveFilter'];

    function MsgController($scope, loveFilter) {
        $scope.name = "Thong";
        $scope.stateOfBeing = "hungry";

        $scope.sayMessage = function () {
            var msg = "Thong likes to eat healthy snacks at night!";
            return msg;
        };

        $scope.sayLovesMessage = function () {
            var msg = "Thong likes to eat healthy snacks at night!";
            msg = loveFilter(msg);
            return msg;
        };

        $scope.feedThong = function () {
            $scope.stateOfBeing = "fed";
        };

    };

    function LovesFilter() {
        return function(input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    };

    function TruthFilter() {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };
    };

}) ();