'use strict';

var _ = require('lodash');
var  AnswerGenerator = require('../main/answer-generator');
var CompareNumber = require('../main/compare-number');
var Guess = require('../main/guess');
describe('guess',function() {
  var guess;

  it ('should return 0A0B ',function() {

   	var count = 0;
    spyOn(_, 'random').and.callFake(function() {
      var numbers = [5,6,7,8,8];
      return numbers[count++];
    });

    var comparenumber = new CompareNumber();
    var answergenerator = new AnswerGenerator();

    guess = new Guess(comparenumber ,answergenerator);

    expect(guess.guessNumber('1234')).toBe('0A0B');
   });

  it ('should return 4A0B ',function() {

    var count = 0;
    spyOn(_, 'random').and.callFake(function() {
      var numbers = [1,1,2,3,4];
      return numbers[count++];
    });

    var comparenumber = new CompareNumber();
    var answergenerator = new AnswerGenerator();

    guess = new Guess(comparenumber,answergenerator);

    expect(guess.guessNumber('1234')).toBe('4A0B');

   });

  it ('should return 0A4B ',function() {

    var count = 0;
    spyOn(_, 'random').and.callFake(function() {
      var numbers = [4,3,2,2,1];
      return numbers[count++];
    });

    var comparenumber = new CompareNumber();
    var answergenerator = new AnswerGenerator();

    guess = new Guess(comparenumber,answergenerator);

    expect(guess.guessNumber('1234')).toBe('0A4B');

   });
})

