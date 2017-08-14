'use strict';

var _ = require('lodash');


function stringsToIntegers(string) {
  var maybeNumbers = string.split(/[^a-zA-Z0-9-]+/);
  return _.map(maybeNumbers, function(element) {
    if (element === "") {
      return 0;
    } else {
      checkForNegatives(element);
      return parseInt(element);
    }
  });
}

function checkForNegatives(element) {
    element = parseInt(element);
    if (element < 0) {
      throw `negatives not allowed: ${element}`;
    }
}

function addIntegers(arrayOfIntegers) {
  return _.reduce(arrayOfIntegers,function (sum, value) { return sum + value }, 0);
 }

function Calculator() {
  return {
    add: function(string) {
      var integers = stringsToIntegers(string);
      return addIntegers(integers);
    }
  }
}

module.exports = Calculator;
