// ? Array.prototype.forEach()

// * The forEach() method executes a provided function once for each array element.

const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

// ? Converting a for loop to forEach

const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach(function (item) {
  copyItems.push(item);
});

// ? Flatten an array

function flatten(arr) {
  const result = [];

  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });

  return result;
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

flatten(nested); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//- - - - - - - - - - - - - - - - - - - - - -

let words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift(); //'one' will delete from array
  }
}); // one // two ​​​​// four

console.log(words); //['two', 'three',​​​​ 'four']
