'use strict'
var stringConverter = function(string) {
  return parseInt(string);
}

function Calculator() {
  return {
    add: function(firstInteger, secondInteger) {
      firstInteger = stringConverter(firstInteger)
      secondInteger = stringConverter(secondInteger)
      return firstInteger + secondInteger;
    }
  }
}

module.exports = Calculator;
