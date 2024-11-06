function removeFromArray(arr, ...remove) {
  // create a new empty array
  const newArr = [];

  arr.forEach((item) => {
    if (!remove.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}
console.log(removeFromArray(["Hey", 1, 2, 3, 3, 4, "Ho"], 3, "Hey"));

// Do not edit below this line
module.exports = removeFromArray;
