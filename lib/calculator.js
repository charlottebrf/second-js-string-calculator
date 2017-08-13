'use strict';

var _ = require('lodash');

var stringConverter;

function split(string) {
  return string.split(',');
}

function stringsToIntegers(maybeNumbers) {
  return _.map(maybeNumbers, function(element) {
    if (element == "") {
      return 0;
    } else {
      return parseInt(element);
    }
  });
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
