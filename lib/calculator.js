'use strict';
var stringConverter;

function stringConverter(string) {
  return parseInt(string);
}

function split(string) {
  return string.split(',');
}

function stringsToIntegers(string) {
  var arrayOfStrings = [];
  for (var character of string) {
    arrayOfStrings.push(stringConverter(character));
  }
  return arrayOfStrings;
}

function addIntegers(arrayOfIntegers) {
  return arrayOfIntegers.reduce(function (sum, value) {
    return sum + value;
  }, 0);
}

function Calculator() {
  return {
    add: function(string) {
      var splitString = split(string);
      var strings = stringsToIntegers(splitString);
      return addIntegers(strings);
    }
  }
}

module.exports = Calculator;
