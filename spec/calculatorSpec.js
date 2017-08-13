'use strict'

describe("Calculator", function() {
  var Calculator  = require('./../lib/Calculator');
  var calculator;

  beforeEach(function() {
    calculator = Calculator();
  });

  it("adds integers", function() {
    expect(calculator.add("1,2")).toEqual(3);
  });

  it("returns a single integer", function() {
    expect(calculator.add("1")).toEqual(1);
  });

  it("returns 0 when given an empty string", function() {
    expect(calculator.add("")).toEqual(0);
  });
});
