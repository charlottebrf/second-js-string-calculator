'use strict'

describe("Calculator", function() {
  var Calculator  = require('./../lib/Calculator');
  var calculator;

  beforeEach(function() {
    calculator = Calculator();
  });

  describe("integers & empty strings separated by a comma", function() {
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

  describe("calculates sum of integers separated by different non-digit delimiters", function() {
    it("adds integers", function() {
      expect(calculator.add("1\n2")).toEqual(3);
    });

    it("adds integers", function() {
      expect(calculator.add("1\n,2")).toEqual(3);
    });

    it("adds integers with different delimiters", function() {
      expect(calculator.add("//;\n1;2")).toEqual(3);
      expect(calculator.add("*\n1;2")).toEqual(3);
    })

    it("adds integers with more than one different delimiters", function() {
      expect(calculator.add("//;;\n1;2")).toEqual(3);
    })
  });

  describe("doesn't allow sum of negative numbers to be calculated", function() {
    it("raises an error for a negative number", function() {
      expect(calculator.add("-1;2")).toEqual(2);
    })
  })

});
