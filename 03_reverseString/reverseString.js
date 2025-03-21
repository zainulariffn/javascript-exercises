const reverseString = function (str) {
  let strSplit = str.split("");
  let reverseArray = strSplit.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

console.log(reverseString(`Hey there`));

// Do not edit below this line
module.exports = reverseString;
