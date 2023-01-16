const middle = function(arr) {

  let outputArr = [];

  if (arr.length > 2) {

    for (let i = 0; i < arr.length; i++) {

      if (arr.length % 2 !== 0) {
        let mid = arr.length / 2;
        outputArr.push(arr[Math.floor(mid)]);
        break;
      }

      let mid1 = (arr.length / 2) - 1;
      let mid2 = arr.length / 2
      outputArr.push(arr[Math.floor(mid1)], arr[Math.floor(mid2)]);
      break;
    }
  }
  return outputArr;
};

module.exports = middle;
