'use strict';


var CompareNumber = require('../main/compare-number');

describe('guessnumber:', function() {
  var compareNumber;
  beforeEach( function() {
    compareNumber = new CompareNumber();
  });

  it ('return 0A0B test',function() {
    var result = compareNumber.compareNumber('1234','5678');
    expect(compareNumber.compareNumber('1234','5678')).toBe('0A0B');
  });
  
  it ('return 4A0B test',function() {
    var result = compareNumber.compareNumber('1234','5678')
    expect(compareNumber.compareNumber('1234','1234')).toBe('4A0B');

  });

  it ('return 0A4B test',function() {
   var result = compareNumber.compareNumber('1234','5678')
    expect(compareNumber.compareNumber('1234','4321')).toBe('0A4B');

  });
});
