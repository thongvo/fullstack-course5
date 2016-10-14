/**
 * Created by vhthong on 13/10/2016.
 */
(function() {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];

    function MsgController($scope) {
        $scope.name = "Thong";

        $scope.sayMessage = function () {
            return "Hello from Thong";
        };
    };


}) ();