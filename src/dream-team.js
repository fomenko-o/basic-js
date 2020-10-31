const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  return arr
    .map(function (item) {
      if (typeof item !== "string") return false;
      return (item = item.trim().toUpperCase()[0]);
    })
    .filter((i) => i)
    .sort()
    .reduce((sum, current) => sum + current, "");
};
