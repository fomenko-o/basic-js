const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {
  if (parseFloat(activity).toString() !== activity || parseFloat(activity) <= 0 || parseFloat(activity) > 15
  ) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(activity)) / (0.693 / HALF_LIFE_PERIOD));
};
