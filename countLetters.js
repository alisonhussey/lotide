const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  const results = {};
  for (const letter of word) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

const results1 = countLetters('LHL');
const results2 = countLetters("lighthouse in the house");

console.log(results1);
console.log(results2);

assertEqual(results1.H, 1)
assertEqual(results2.h, 4);




