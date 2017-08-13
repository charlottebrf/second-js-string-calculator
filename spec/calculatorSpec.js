'use strict'

describe("Calculator", function() {
  var Calculator  = require('./../lib/Calculator');
  var calculator;

  beforeEach(function() {
    calculator = Calculator();
  });

  it("should be able to return the a string number as an integer", function() {
    expect(calculator.add(1,2)).toEqual(3);
  });
});
