'use strict';


var CompearNumber = require('../main/compare-number');

describe('guessnumber:', function() {
  var compearNumber;
  beforeEach( function() {
    compearNumber = new CompearNumber();
  });

  it ('return 0A0B test',function() {
    var result = compearNumber.compearNumber('1234','5678');
    expect(compearNumber.compearNumber('1234','5678')).toBe('0A0B');
  });
  it ('return 4A0B test',function() {
    var result = compearNumber.compearNumber('1234','5678')
    expect(compearNumber.compearNumber('1234','1234')).toBe('4A0B');

  });
  it ('return 0A4B test',function() {
   var result = compearNumber.compearNumber('1234','5678')
    expect(compearNumber.compearNumber('1234','4321')).toBe('0A4B');

  });
});
