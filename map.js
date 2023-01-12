// This is a function
// It will take in two arguments: an array and a callback function
// The array will be mapped
// Will return a new array based on the results of the callback function

const map = (array, callback) => {
    
  const results = [];

  for (let item of array) {
    results.push(callback(item))
  }
  return results
}

// Test arrays to see if they are equal
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

// Test assertion to see if true
const assertArraysEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Assertion Testing
console.log('ASSERTION TESTING')
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual((eqArrays(results1, words)), false) // Should pass, false equals false
console.log('ASSERTION TESTING')
const words2 = ["ground", "control", "to", "major", "tom"];
const results3 = map(words2, word => word);
assertArraysEqual((eqArrays(results3, words2)), true) // Should pass as both equal true
console.log('ASSERTION TESTING')
const words3 = ["ground", "control", "to", "major", "tom"];
const results4 = map(words3, word => word/2);
assertArraysEqual((eqArrays(results4, words3)), true) // Should fail




