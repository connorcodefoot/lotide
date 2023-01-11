
// create a function that takes in two arrays
// the function should output a true or false value. True of the two arrays are identical. False if the arrays are non identical.
// loop through each array and compare values using  ===

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

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  
  return console.log(`🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️Assertion Failed: ${actual} !== ${expected}`)
} 

// TEST CODE
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 3]), true)