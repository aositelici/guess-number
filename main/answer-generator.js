
'use strict';

var _ = require('lodash');

var AnswerGenerator = function () {
  this.Math = _;
};

AnswerGenerator.prototype.getGenerator = function(){

  var result = [];
  while(result.length < 4) {

    var randomNumber = this.Math.random(0,9);

    if(result.indexOf(randomNumber) === -1) {
      result.push(randomNumber );
    }

  }
  return result.join('');
}

module.exports = AnswerGenerator;
