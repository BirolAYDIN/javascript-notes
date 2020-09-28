// ? Array.prototype.includes()

// * The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// ! Note: The includes() method is case sensitive.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

let arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false

let arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false
