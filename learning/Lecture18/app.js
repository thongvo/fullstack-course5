/**
 * Created by vhthong on 13/10/2016.
 */
(function () {
    'use strict';

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope) {
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;
        
        $scope.addToList = function () {
            var newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            };

            $scope.shoppingList2.push(newItem);
        }
    };
})();