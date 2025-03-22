const leapYears = function (year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};
console.log(leapYears(1996)); // is a leap year: returns true
console.log(leapYears(1997)); // is a leap year: returns false
console.log(leapYears(34992)); // is not a leap year: returns true
console.log(leapYears(1900)); // is not a leap year: returns false
console.log(leapYears(1600)); // is not a leap year: returns true
console.log(leapYears(700)); // is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;
