// ? Array.prototype.flat()

// * The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const nested = [["📦", "📦"], ["📦"]];
const flattened = nested.flat();
console.log(flattened);
// ['📦', '📦', '📦']

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

// * Alternatives

// * reduce and concat

const arr = [1, 2, [3, 4]];

// To flat single level array
arr.flat();
// is equivalent to
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// or with decomposition syntax
const flattened = (arr) => [].concat(...arr);

// * Flattening nested arrays

const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * Flattening and array holes

// The flat method removes empty slots in arrays:

const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]

// ? Setting depth parameter

// * array.flat(<depth>);
// * By default, flat() will only flatten one layer deep. In other words, depth is 1.

array.flat();
// Same as
array.flat(1);

// ? Deeper Nested Arrays
// * The great thing is that this method also works beyond 1 level deep. You simply have to set the appropriate depth parameter to flatten deeper nested arrays.

const twoLevelsDeep = [[1, [2, 2], 1]];
// depth = 1
twoLevelsDeep.flat();
// [1, [2, 2], 1]
// depth = 2
twoLevelsDeep.flat(2);
// [1, 2, 2, 1]

// ? Infinitely Nested Arrays
// * Let’s say, you want to go infinitely deep. Not a problem, we can do that too. Just pass Infinity.

const veryDeep = [[1, [2, 2, [3, [4, [5, [6]]]]], 1]];
veryDeep.flat(Infinity);
// [1, 2, 2, 3, 4, 5, 6, 1]

// ? ES6 Solution
// * Here is a ES6 solution. This only work for one level nested array.
const oneLevelDeep = [[1, 2], [3]];
const flattened = [].concat(...oneLevelDeep);
// [1, 2, 3,]

// ? Older Browser Solution
// * Here’s one for older browser and pre ES6. Again, this only works for one level nested array.
const oneLevelDeep = [[1, 2], [3]];
const flattened = [].concat.apply([], oneLevelDeep);
// [1, 2, 3,]

const arrays = [[1], ["2"], [3]];

const merged = [].concat(...arrays);

console.log(merged); // [ 1, '2', 3 ]

// * Pre ES6:

var merged = [].concat.apply([], arrays);

[[1, 2], [3, 4, 5], [6]].flat();
// [1, 2, 3, 4, 5, 6]

foo = [1, 4, null, true, false, , "apple"]; // [1, 4, null, true, false, <1 empty item> ,'apple']

const fo1 = foo.flat(); // [1, 4, null, true, false ,'apple']

console.log(fo1);

let fo = foo.filter((i) => i); // [1, 4, true, 'apple']
console.log(fo);

// ? Alternative
// * reduce() and concat()

var arr = [1, 2, 3, 4];

arr.flatMap((x) => [x, x * 2]);
// is equivalent to
arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]

// * Examples - map() and flatMap()

let arr1 = [1, 2, 3, 4];

let arr = arr1.map((x) => x * 2);
console.log(arr);
// [2, 4, 6, 8]

let arr1 = [1, 2, 3, 4];

let arr = arr1.map((x) => x * 2);
console.log(arr);
// [[2], [4], [6], [8]]

let arr1 = [1, 2, 3, 4];
let arr = arr1.flatMap((x) => [x * 2]);
console.log(arr);
// [2, 4, 6, 8]

// only one level is flattened
let arr1 = [1, 2, 3, 4];
let arr = arr1.flatMap((x) => [[x * 2]]);
console.log(arr);
// [[2], [4], [6], [8]]

// * Let's generate a list of words from a list of sentences.

let arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]


