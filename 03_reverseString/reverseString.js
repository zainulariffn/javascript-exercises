const reverseString = function (strOne) {
  let strReverseOne = strOne;

  // Split the string
  let strOneSplit = strReverseOne.split("");

  // Reverse the string
  let strOneReverse = strOneSplit.reverse("");
  // Join the string
  let strOneJoin = strOneReverse.join("");

  return strOneJoin;
};

reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;
