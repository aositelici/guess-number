'use strict';

var _ = require('lodash');
var  AnswerGenerator = require('../main/answer-generator');
var CompareNumber = require('../main/compare-number');
var Guess = require('../main/guess');
describe('guess',function() {
  describe('#guessNumber',function() {
    var guess;
  
    it ('should return 0A0B ',function() {

    var answer = new AnswerGenerator();
    spyOn(answer, 'getGenerator').and.returnValue('1243');
    
    var comparenumber = new CompareNumber(); 
    spyOn(comparenumber, 'compareNumber').and.callFake(function (answer,input){

      if(answer === '1243' && input === '1234') {
        return '2A2B';
      }
    });
    guess = new Guess(comparenumber,answer);

    expect(guess.guessNumber('1234')).toBe('2A2B');
    });
  });

})