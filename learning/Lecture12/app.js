/**
 * Created by vhthong on 13/10/2016.
 */
(function() {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope', '$filter'];

    function MsgController($scope, $filter) {
        $scope.name = "Thong";
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost = .45;

        $scope.sayMessage = function () {
            var msg = "Hello from Thong";
            var output = $filter('uppercase')(msg);
            return output;
        };

        $scope.feedThong = function () {
            $scope.stateOfBeing = "fed";
        };

    };


}) ();