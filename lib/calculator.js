'use strict';

var _ = require('lodash');


function stringsToIntegers(string) {
  var maybeNumbers = string.split(/[^a-zA-Z0-9-]+/);
  checkForNegatives(maybeNumbers);
  return _.map(maybeNumbers, function(element) {
    if (element === "") {
      return 0;
    } else {
      return parseInt(element);
    }
  });
}

function checkForNegatives(maybeNumbers) {
  var negatives = _.filter(maybeNumbers, function(element) {
    return parseInt(element) < 0;
  });
  if (negatives.length > 0) {
    throw `negatives not allowed: ${negatives.join(", ")}`;
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
