
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`โโโโAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`๐โโ๏ธ๐โโ๏ธ๐โโ๏ธ๐โโ๏ธAssertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, val) {

  let keys = Object.keys(obj);

  for(i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === val) {
      return keys[i]
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))