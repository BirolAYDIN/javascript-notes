// ? Array.from()

// * The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]

Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
