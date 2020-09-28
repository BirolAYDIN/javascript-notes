// ? Array.prototype.flatMap()
/**
 * Array.prototype.flatMap first maps each element using a mapping function,
 * then flattens the result into a new array. It is identical to a map followed
 *  by a flatten of depth 1, but flatMap is quite often useful and merging both
 *  into one method is slightly more efficient.
 * */

const foods = ["🍫", "🍦"];
// ❌ map + flat
foods.map((food) => [food, "😋"]).flat();
// ✅ flatMap
foods.flatMap((food) => [food, "😋"]);
// Result
// ['🍫', '😋', '🍦', '😋']

const names = ["jane", "john"];
// Step 1: map
const nestedArray = names.map((name, index) => [name, index]);
console.log(nestedArray);
// [ ['jane', 1], ['john', 2 ] ]

// So now we have a nested array. And we can use flat() to flatten the array.

const nestedArray = [
  ["jane", 1],
  ["john", 2],
];
nestedArray.flat();

// Of course, we can shorten this and just call flatMap(). Let's take a look 👀

const names = ["jane", "john"];
const result = names.flatMap((name, index) => [name, index]);
// [ 'jane', 1, 'john', 2 ]

// !  - flatMap only flattens 1 level deep

/** With flat(), it accepts a parameter where you set the depth.
 * What this means is you can specify how deep a nested array should be flattened.
 *
 * */

const depth1 = [[1], [2]];
depth1.flat(); // same as depth.flat(1)
// [1, 2]
const depth2 = [[[1, 2]]];
depth2.flat(2);
// [1, 2]

// * Now for flatMap(), you can only go 1-level deep.

const names = ["jane"];
let name = names.flatMap((name, index) => [[name, index]]);
console.log(name);
//  [ ['jane', 0] ]

// * Let’s break this into 2 steps, so you can see what’s going on.

const names = ["jane"];
// Step 1: created a 2-level deep array
const twoLevelDeep = names.map((name, index) => [[name, index]]);
// [ [ ['jane', 0] ] ]
// Step 2: flat using depth 1
const name = twoLevelDeep.flat();
console.log(name);
// [ [ 'jane', 0 ] ]

// * But if you do it separately, I can pass a depth parameter and flatten it completely:

// ! So, if you want it to flatten beyond depth of 1. Then it is better to NOT use flatMap() and just call the methods separately 👍

// ? flatMap to filter item

// * One really cool you can do with flatMap is to remove an element. In this example, I want to remove all negative numbers.

const numbers = [1, 2, -3, -4, 5];
numbers.flatMap((number) => {
  return number < 0 ? [] : [number];
});
// [ 1, 2, 5]

// * That’s really cool! It’s like acting like a filter. But how is this actually working. The secret is the empty array. Let's see what I mean.

const emptyNestedArray = [[], 1];
emptyNestedArray.flat();
// [ 1 ]

// * When you try to flatten an element that’s an empty array, it simply removes that item. So we can use that knowledge to make flatMap act kind of like filter method. Neat right! 👍
