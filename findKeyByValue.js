const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(object, value) {
  const listOfKeys = Object.keys(object);
  for (let genre of listOfKeys) {
    if (object[genre] === value) {
      return genre;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);