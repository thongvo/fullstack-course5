/**
 * Created by vhthong on 13/10/2016.
 */
(function () {
    'use strict';

    var shoppingList = [
        "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)",
        "Pepto Bismol (Cookie flavor)"
    ];

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope) {
        $scope.shoppingList = shoppingList;

    };
})();