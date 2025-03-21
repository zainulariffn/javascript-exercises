const removeFromArray = function (arr, ...removeArr) {
  let newArr = [];
  arr.forEach((item) => {
    if (!removeArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};

console.log(
  removeFromArray([1, 2, 2, 3, 4, "Tacos", 7], 3, 2, "Tacos", 7, "1")
);

// Do not edit below this line
module.exports = removeFromArray;
// const removeFromArray = function (arr, removeArr, ...theArggs) {
//   let arrRem = "";
//   arr = arrRem;
//   let removeArray = removeArr.push();
//   console.log(rem);
//   return removeArray;
// };
