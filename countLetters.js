
// Count the letters of any given string
// Add each to an object
// Return the object

const countLetters = function(str) {

  let letterCountObj = {};

  for (let word of str) {

    if (word !== ' ') {
  
      if (!(letterCountObj[word])) {
        letterCountObj[word] = 0;
      }

      letterCountObj[word] += 1;

    }
  }
  return letterCountObj;
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(countLetters('this friggen string'));
