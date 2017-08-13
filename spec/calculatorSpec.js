'use strict'

describe("Calculator", function() {
  var Calculator  = require('./../lib/Calculator');
  var calculator;

  beforeEach(function() {
    calculator = Calculator();
  });

  it("adds integers", function() {
    expect(calculator.add(1,2)).toEqual(3);
  });

});
