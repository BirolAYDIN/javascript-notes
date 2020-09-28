// ? String.prototype.split()

/** The split() method divides a String into an ordered list of substrings,
 * puts these substrings into an array, and returns the array.
 * The division is done by searching for a pattern; where the pattern is provided
 * as the first parameter in the method's call.
 */

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

// * Returning a limited number of splits

// In the following example, split() looks for spaces in a string and returns the first 3 splits that it finds.

const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);

console.log(splits);
// ["Hello", "World.", "How"]

// * Splitting with a RegExp to include parts of the separator in the result
// If separator is a regular expression that contains capturing parentheses (), matched results are included in the array.
const myString = "Hello 1 word. Sentence number 2.";
const splits = myString.split(/(\d)/);

console.log(splits);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]
