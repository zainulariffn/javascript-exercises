const repeatString = function (str, num) {
  if (num < 0) return "Error";

  let str2 = "";
  for (let i = 0; i < num; i++) {
    str2 += str;
  }
  return str2;
};
repeatString("Hey", 3);

// Prevent infinite loop
// Store string
// Create a loop
// Store str2 inside new variable
// Return result for each loop

// Do not edit below this line
module.exports = repeatString;
