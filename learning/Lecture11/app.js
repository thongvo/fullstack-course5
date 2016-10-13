/**
 * Created by vhthong on 13/10/2016.
 */
(function() {
    'use strict';

    angular.module('DIApp', [])
        .controller('DIController', DIController);

    DIController.$inject = ['$scope', '$filter'];

    function DIController($scope, $filter, $injector) {
        $scope.name = "Thong";

        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
    };


}) ();