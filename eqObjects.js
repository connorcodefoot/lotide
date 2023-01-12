
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {

  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {

    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key])
    }

    if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true
};

//Test Cases
console.log('TEST CASES')
const multiColorShirtObject = { colors: ["red", "green"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true) // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false