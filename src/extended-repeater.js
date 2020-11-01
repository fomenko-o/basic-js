const CustomError = require("../extensions/custom-error");

module.exports = function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition,
    additionRepeatTimes = 0,
    additionSeparator = "|",
  } = {}
) {
  str = str && str.toString();
  addition = addition && addition.toString();
  let res = "";
  for (let i = repeatTimes; i > 0; i--) {
    res += str;
    for (let y = additionRepeatTimes; y > 0; y--) {
      res += addition + (y - 1 > 0 ? additionSeparator : "");
    }
    res += i - 1 > 0 ? separator : "";
  }
  res += !additionRepeatTimes && addition ? addition : "";
  return res;
};
