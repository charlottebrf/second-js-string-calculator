'use strict';

var _ = require('lodash');

var stringConverter;

function split(string) {
  return string.split(',');
}

function stringsToIntegers(string) {
  var arrayOfIntegers = [];
  for (var character of string) {
    if (string == "") {
      arrayOfIntegers.push(0);
    } else {
      arrayOfIntegers.push(parseInt(character));
    }
  }
  return arrayOfIntegers;
}

function addIntegers(arrayOfIntegers) {
  return _.reduce(arrayOfIntegers,function (sum, value) {
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
