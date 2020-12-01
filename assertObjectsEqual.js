const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const o1Keys = Object.keys(object1);
  const o2Keys = Object.keys(object2);

  if (o1Keys.length !== o2Keys.length) {
    return false;
  } else {
    for (let key of o1Keys) {
      if ((Array.isArray(object1[key])) && (Array.isArray(object2[key]))) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😍😍😍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//console.log(`Example label: ${inspect(actual)}`);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false