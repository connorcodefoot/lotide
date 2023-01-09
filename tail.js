const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};


const assertEqual = function(actual, expected) {

  if (actual.toString() === expected.toString()) {
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️Assertion Failed: ${actual} !== ${expected}`);
  }
};

//test case to return a failed response
console.log(assertEqual(tail([5,4,5]), 9));

//test case to return a positive response
console.log(assertEqual(tail([7, 9]), [9]));

//test case to return unmodified original array
let unmodArr = [5, 6, 10];
console.log(tail(unmodArr, [3, 2, 7]));
console.log(unmodArr);


