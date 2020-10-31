const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let turnsPerSec = turnsSpeed / 3600;
  let time = parseInt(turns / turnsPerSec, 10);
  return { turns: turns, seconds: time };
};