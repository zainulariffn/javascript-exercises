const convertToCelsius = function (numFah) {
  let conv = ((numFah - 32) * 5) / 9;
  let round = Math.round(conv * 10) / 10;
  return round;
};
console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-100));

// //
// //
// //

const convertToFahrenheit = function (numCel) {
  let conv = (numCel * 9) / 5 + 32;
  let round = Math.round(conv * 10) / 10;
  return round;
};
console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(73.2));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
