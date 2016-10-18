/**
 * Created by vhthong on 13/10/2016.
 */
(function () {
    'use strict';

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListAddController', ShoppingListAddController)
        .controller('ShoppingListShowController', ShoppingListShowController)
        .service('ShoppingListService', ShoppingListService);

    ShoppingListAddController.$inject = ['ShoppingListService'];
    ShoppingListShowController.$inject = ['ShoppingListService'];

    function ShoppingListAddController(ShoppingListService) {
        var itemAdder = this;

        itemAdder.itemName = "";
        itemAdder.itemQuantity = "";

        itemAdder.addItem = function () {
            ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
        };
    };

    function ShoppingListShowController(ShoppingListService) {
        var showList = this;

        showList.items = ShoppingListService.getItems();
    };

    function ShoppingListService() {
        var service = this;

        //List of shopping items
        var items = [];

        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
        };

        service.getItems = function () {
            return items;
        };
    };
})();