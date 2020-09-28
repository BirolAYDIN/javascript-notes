// ? Array.prototype.find()

// * The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.find(checkAdult));
// expected output: 18

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// expected output: 12

// TODO - Syntax

// !  array.find(function(currentValue, index, arr),thisValue)

/**If you need the index of the found element in the array, use findIndex().
 *If you need to find the index of a value, use Array.prototype.indexOf(). (It’s similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
 *If you need to find if a value exists in an array, use Array.prototype.includes(). Again, it checks each element for equality with the value instead of using a testing function.
 *If you need to find if any element satisfies the provided testing function, use Array.prototype.some().
 */

// * Return value
// * The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

// ? Find an object in an array by one of its properties

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

// ? Using arrow function and destructuring

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
