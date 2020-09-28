let arr = [1, 2, 3, 4, 5];

console.log(arr.constructor); // [Function: Array]
console.log(arr.constructor.name); // Array
console.log(arr.constructor.prototype); // array all methods list



// ? 

const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}

