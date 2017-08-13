'use strict'

describe("Calculator", function() {
  var Calculator  = require('./../lib/Calculator');
  var calculator;

  beforeEach(function() {
    calculator = Calculator();
  });

  fit("adds integers", function() {
    expect(calculator.add("1,2")).toEqual(3);
  });

  it("returns a single integer", function() {
    expect(calculator.add("1")).toEqual(1);
  });

});
