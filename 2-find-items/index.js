const items = ["apple", "orange", "banana"];

// for big o notion example

// example 1
// function findItems(item) {
//   for (let i = 0; i < items.length; i++) {
//     if (items[i] === item) {
//       console.log("found item " + item);
//     }
//   }
// }

// findItems("appl");
// o(n) of time complexity
// o(1) of space complexity

// example 2

function findItems(item) {
  const findItem = items.find((it) => it == item);
  if (!findItem) {
    console.log("not found " + item);
  } else {
    console.log("found item " + item);
  }
}

findItems("apple");

// o(n) of time complexity
// o(1) of space complexity
