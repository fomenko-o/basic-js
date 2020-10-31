const CustomError = require("../extensions/custom-error");

module.exports = function transform(task) {
  if (!Array.isArray(task)) throw new Error("Error");
  let arr = task.slice();
  let res = [];
  let a = [];
  let b = [];

  arr.reduce(function (newArr, item, index, array) {
    if (item == "--discard-next") {
      a.push(item);
      a.push((array[index + 1] = "empty"));
    } else if (item == "--double-next") {
      a.push(item);
      a.push(array[index + 1]);
    } else {
      a.push(item);
    }
  }, []);

  a.reduceRight(function (newArr, item, index, array) {
    if (item == "--discard-prev") {
      b.push(item);
      b.push((array[index - 1] = "empty"));
    } else if (item == "--double-prev") {
      b.push(item);
      b.push(array[index - 1]);
    } else {
      b.push(item);
    }
  }, []);

  res = b
    .filter((item) => item !== undefined)
    .filter((item) => item !== "empty")
    .filter((item) => item !== "--discard-prev")
    .filter((item) => item !== "--double-prev")
    .filter((item) => item !== "--discard-next")
    .filter((item) => item !== "--double-next")
    .reverse();
  return res;
};
