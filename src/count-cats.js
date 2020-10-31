const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr
    .map(function (item) {
      return item.filter((i) => i == "^^").length;
    })
    .reduce((sum, current) => sum + current, 0);
};
