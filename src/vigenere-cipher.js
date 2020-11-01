const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(check = true) {
    this.check = check;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    message = message.toUpperCase().split("");
    key = key.toUpperCase().split("");

    for (let i = 0, j = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) != -1) {
        message[i] =
          alphabet[
            (alphabet.indexOf(message[i]) + alphabet.indexOf(key[j])) %
              alphabet.length
          ];
        j = ++j % key.length;
      }
    }
    return this.check ? message.join("") : message.reverse().join("");
  }
  decrypt(encryptMessage, key) {
    if (encryptMessage === undefined || key === undefined)
      throw new Error("Error");
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    encryptMessage = encryptMessage.toUpperCase().split("");
    key = key.toUpperCase().split("");

    for (let i = 0, j = 0; i < encryptMessage.length; i++) {
      if (alphabet.indexOf(encryptMessage[i]) != -1) {
        encryptMessage[i] =
          alphabet[
            (alphabet.indexOf(encryptMessage[i]) +
              alphabet.length -
              alphabet.indexOf(key[j])) %
              alphabet.length
          ];
        j = ++j % key.length;
      }
    }
    return this.check
      ? encryptMessage.join("")
      : encryptMessage.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
