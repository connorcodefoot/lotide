
const eqArrays = require('./eqArrays')

const assertArraysEqual = function (arr1, arr2, expected) {

  let actual = eqArrays(arr1, arr2)

  if (actual === expected) {
    console.log(`โโโโAssertion Passed: ${actual} === ${expected}`);
  } else {
  console.log(`๐โโ๏ธ๐โโ๏ธ๐โโ๏ธ๐โโ๏ธAssertion Failed: ${actual} !== ${expected};`);
  };
};

module.exports = assertArraysEqual;