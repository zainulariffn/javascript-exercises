const sumAll = function (startVal, endVal) {
  if (!Number.isInteger(startVal) || !Number.isInteger(endVal)) return "ERROR"; // Test with non-integer
  if (startVal < 0 || endVal < 0) return "ERROR"; // Test with negative integer
  // Test with greater starting value with swap position
  if (startVal > endVal) {
    const temp = startVal;
    startVal = endVal;
    endVal = temp;
  }
  let finResult = 0;

  for (let i = startVal; i <= endVal; i++) {
    finResult += i;
  }
  return finResult;
};

// Do not edit below this line
module.exports = sumAll;
