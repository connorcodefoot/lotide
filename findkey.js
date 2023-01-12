// This will be a function
// This function is similar to findKeyByValue
// This function will use refactored components of findKeyByValue including replacing functions with arrows and using callbacks
// Function receives an object and a callback function
// It should scan the object and return the first key for which the callback returns a truthy value
// If no key is found, then it should return undefined.

const findKey = (obj, callback) => {

//get keys from object
const keys = Object.keys(obj)

//Scan object for value and return key
for(let index of keys) {
  if (callback(obj[index])) {
    return index
  }
}
// Return if there is a truthy statement, if not return undefined
return undefined
}

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3))

