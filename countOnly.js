const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Count only receives an array and an object as an input
// Only keys with truth values should be counted in the resulting object
// All other keys, either set to false or not included within the object, should NOT be counted
// If a object key is truthy but does not exist within the input array it should NOT be counted. 
// The solution should be represented by a single string

const countOnly = function(allItems, itemsToCount) {
  
  const results ={};

  for (const item of allItems) {
    
    if (!(itemsToCount[item])) {
      continue
    }
    
    if (!(results[item])) {
      results[item] = 0
    } 
  
  results[item] ++
  }   
 
  return results
}


//Test Code
console.log('TEST CODE')

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);