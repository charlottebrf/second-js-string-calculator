'use strict';

var _ = require('lodash');


function stringsToIntegers(string) {
  var maybeNumbers = string.split(',');
  return _.map(maybeNumbers, function(element) {
    if (element == "") {
      return 0;
    } else {
      return parseInt(element);
    }
  });
}

function addIntegers(arrayOfIntegers) { return _.reduce(arrayOfIntegers,function (sum, value) { return sum + value }, 0); }

function Calculator() {
  return {
    add: function(string) {
      var integers = stringsToIntegers(string);
      return addIntegers(integers);
    }
  }
}

module.exports = Calculator;
