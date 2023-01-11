const letterPositions = function(str) {

  let letterIndexObj = {};

  for (let i = 0; i < str.length; i++) {

    if (str[i] !== ' ') {
  
      if (!(letterIndexObj[str[i]])) {
        letterIndexObj[str[i]] = []
      }

      letterIndexObj[str[i]].push(i)

    }
  }
  return letterIndexObj;
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(letterPositions('Hello'));

assertEqual(letterPositions('hello').e, [1]);
