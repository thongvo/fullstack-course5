/**
 * Created by vhthong on 17/10/2016.
 */

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5Filter(value) {
    return value > 5;
}
var filterdNumberArray = numberArray.filter(above5Filter);

console.log("Filtered Number array: ", filterdNumberArray);

var shoppingList = [
    "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)",
    "Pepto Bismol (Cookie flavor)"
];

console.log("Shopping List: " + shoppingList);

var searchValue = "Bismol";

function containsFIlter(value) {
    return value.indexOf(searchValue) !== -1;
}

var searchedShoppingList = shoppingList.filter(containsFIlter);

console.log("Searched shopping list: " + searchedShoppingList);