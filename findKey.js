const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};


/*const findKey = function(object, callback) {
  const results = [];
  for (let item of object) {
    results.push(item);
    if (callback(item)) {
      break;
    }
  }
  return results;
};*/

const findKey = function(object, callback) {
  const listOfKeys = Object.keys(object);
  for (let x of listOfKeys) {
    if (object[x] === callback) {

      return Object.keys(object[x]);
    }
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"