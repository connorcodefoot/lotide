const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`โโโโAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`๐โโ๏ธ๐โโ๏ธ๐โโ๏ธ๐โโ๏ธAssertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;