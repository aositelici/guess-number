'use strict';

var _ = require('lodash');
var AnswerGenerator = require('./answer-generator');
var CompearNumber = require('./compare-number');

var Guess = function (compare,answerGenerator) {
	
  this.compare = compare;
  this.answer = answerGenerator.getGenerator();

}
Guess.prototype.guessNumber = function (input){

  return this.compare.compareNumber (this.answer,input);

 }

 module.exports = Guess;