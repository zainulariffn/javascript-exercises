const sumAll = function (startVal, endVal) {
  if (!Number.isInteger(startVal) || !Number.isInteger(endVal)) return `ERROR`;
  if (startVal < 0 || endVal < 0) return `ERROR`;
  if (startVal > endVal) {
    const temp = startVal;
    startVal = endVal;
    endVal = temp;
  }
  let totalVal = 0;
  for (i = startVal; i <= endVal; i++) {
    totalVal += i;
  }
  return totalVal;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
