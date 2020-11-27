const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5]
const animals = ['dogs', 'cats', 'bunnies', 'hamsters']

/*const map = function(array, callback) {
  console.log('array: ', array);
  console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}
I left this code in file, as I found it very helpful to understand each part, and would like it here in case I want to revisit it.
*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(numbers, number => number + 5);
console.log(results2);

const results3 = map(animals, animal => animal + ' are fluffy');
console.log(results3)



const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(results2, [6, 7, 8, 9, 10])
assertArraysEqual(results3, [ 'dogs are fluffy', 'cats are fluffy', 'bunnies are fluffy', 'hamsters are fluffy' ] )

