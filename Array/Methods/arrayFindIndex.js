// ? Array.prototype.findIndex()

// * The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.findIndex(checkAdult));
// expected output: 2

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

// * Syntax
// * array.findIndex(function(currentValue, index, arr), thisValue)

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
