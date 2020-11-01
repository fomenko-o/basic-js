const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 0 || position >= this.chain.length) {
      this.chain = [];
      throw new Error("Error");
    }
    let startChain = this.chain.slice(0, position - 1);
    let endChain = this.chain.slice(position);
    this.chain = startChain;
    endChain.forEach((a) => this.chain.push(a));
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join("~~");
    this.chain = [];
    return res;
  },
};

module.exports = chainMaker;
