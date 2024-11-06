const leapYears = function (years) {
  if (years % 4 === 0 && (years % 100 !== 0 || years % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};
leapYears(1996); // true
leapYears(1987); // false
leapYears(34992); // true
leapYears(1990); // false
leapYears(1600); // true
leapYears(700); // false

// Do not edit below this line
module.exports = leapYears;
