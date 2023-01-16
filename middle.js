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

const assertArraysEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️Assertion Failed: ${actual} !== ${expected}`);
  }
};c

const middle = function(arr) {

  let outputArr = [];

  if (arr.length > 2) {

    for (let i = 0; i < arr.length; i++) {

      if (arr.length % 2 !== 0) {
        let mid = arr.length / 2;
        outputArr.push(arr[Math.floor(mid)]);
        break;
      }

      let mid1 = arr.length / 2;
      let mid2 = (arr.length / 2) - 1;
      outputArr.push(arr[Math.floor(mid1)], arr[Math.floor(mid2)]);
      break;
    }
  }
  return outputArr;
};

console.log('TEST CASES');

// AssertArrayEquals Test
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);

// Middle Test Odd
console.log('Middle Test Odd:', middle([2, 5, 25, 4,9]));

// Middle Test Even
console.log('Middle Test Even:', middle([2, 5, 25, 13, 4, 9]));
