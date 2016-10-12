/**
 * Created by vhthong on 12/10/2016.
 */
(function () {
    'use strict';

    angular.module('myFirstApp',[])

        .controller('MyFirstController', function($scope) {
            $scope.name = "Thong";
            $scope.sayHello = function() {
                return "Hello Coursera!";
            };
        });
})();