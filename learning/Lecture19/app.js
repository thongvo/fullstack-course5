/**
 * Created by vhthong on 13/10/2016.
 */
(function () {
    'use strict';

    angular.module('ControllerAsApp', [])
        .controller('ParentController2', ParentController2)
        .controller('ChildController2', ChildController2);

    //ParentController2.$inject = ['$scope'];
    ChildController2.$inject = ['$scope'];

    function ParentController2($scope) {
        var parent = this;
        parent.value = 1
    };

    function ChildController2($scope) {
        var child = this;
        child.value = 5;
        console.log("ChildController2 scope: ", $scope);
    };
})();