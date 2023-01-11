
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {

  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return;
  }

  for (let i = 0; i < keys1.length; i++) {
    if (object1[keys1[i]] !== object2[keys2[i]]) {
      return;
    }
  }
  return true;
};

// Test Cases
console.log('TEST CASES');
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { color: "red", size: "medium" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), undefined);