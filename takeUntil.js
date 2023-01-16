// This will be a function
// It will take in two parameters: the array to work with and the callback
// It should return a part of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a truthy value.
// The callback should only be provided one item in the array at a time

const takeUntil = (arr, callback) => {

  let results = [];
  for(const index in arr) {
    if(callback(index)){
      break
    }
    results.push(index)
  }
  return results
}

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false
  } 
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true
}

const assertArraysEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CASES
console.log('TEST CASES')
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual((eqArrays(data1, results1)), false) // return pass as both are false

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual((eqArrays(data2, results2)), false) // return pass as both are false

const data3 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results3 = takeUntil(data3, x => console.log('no change to array'));
console.log(results3);
assertArraysEqual((eqArrays(data3, results3)), true) // pass as both arrays are equal


