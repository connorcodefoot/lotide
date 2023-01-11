
const flatten = function (arr) {
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          arr.splice(i, 1, ...arr[i])
      }
  }
  return arr
}

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  
  return console.log(`🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️Assertion Failed: ${actual} !== ${expected}`);
};

console.log(flatten([1, 2, [3, 4,], 5, [6]]))