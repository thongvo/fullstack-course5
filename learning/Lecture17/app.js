/**
 * Created by vhthong on 13/10/2016.
 */
(function() {
    'use strict';

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope) {
    };
}) ();