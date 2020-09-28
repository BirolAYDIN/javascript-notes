// ? Array.prototype.entries()

// * The entries() method returns a new Array Iterator object that contains  the key/value pairs for each index in the array.

const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

for (let x of iterator1) {
  console.log(x);
}
// expected output:
// Array [0, "a"]
// Array [1, "b"]
// Array [2, "c"]
// -------------------------------------------

const arr = ["a", "b", "c"];

const iterator1 = arr.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

// -------------------------------------------

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();

for (let x of f) {
  console.log(x);
}
// expected output:
// [ 0, 'Banana' ]
// [ 1, 'Orange' ]
// [ 2, 'Apple' ]
// [ 3, 'Mango' ]

// ? Iterating with index and element

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'

// ? Using a for…of loop

var a = ["a", "b", "c"];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
