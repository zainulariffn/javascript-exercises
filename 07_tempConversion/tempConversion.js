const convertToCelsius = function (fahVal) {
  let celcVal = (fahVal - 32) / (9 / 5);
  let celcValRounded = Math.round(celcVal * 10) / 10;
  return celcValRounded;
};

const convertToFahrenheit = function (celciusValue) {
  const fahrenheitValue = celciusValue * (9 / 5) + 32;
  let fahrenheitValueRounded = Math.round(fahrenheitValue * 10) / 10;
  return fahrenheitValueRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
