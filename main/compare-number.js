'use strict';

var _ = require('lodash');
var CompearNumber = function CompearNumber() {
  };

  CompearNumber.prototype.compearNumber = function(answer,input) {

    var same = 0,diff = 0;

    answer = answer.split('');
    input = input.split('');

    answer.forEach(function (element,index) {
      if (index === input.indexOf(element)) {
        same++;
      }
      if (input.indexOf(element) !== -1 && index !== input.indexOf(element)){
        diff++;
      }
    }); 
    
    return same.toString()+'A'+diff.toString()+'B';
};
module.exports = CompearNumber;
