const without = function(sourceArr, itemsToRemove) {
  
  let outputArr = [];

  for (let i = 0; i < sourceArr.length; i++) {
    if (!(itemsToRemove.includes(sourceArr[i]))) {
      outputArr.push(sourceArr[i]);
    }
  }
  return outputArr;
};

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

// Test assertEqual
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 3]), true);

// Test without
console.log('without test:', without(["1", "2", "3", 24, 12, true], [1, '2', "3"]));

// Test everything
const words = ["hello", "world", "lighthouse"];
assertEqual(eqArrays(without(words, ["world"]), ["hello", "world", "lighthouse"]), true);


