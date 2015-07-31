'use strict';

var _ = require('lodash');
var CompearNumber = function CompearNumber() {
  };

  CompearNumber.prototype.compearNumber = function(answer,input) {

    var same = 0,diff = 0;

    answer = answer.split('');
    input = input.split('');

    answer.forEach(function (element,index) {
      
      same += (index === input.indexOf(element)) ? 1 :0;
       
      diff += (input.indexOf(element) !== -1 && index !== input.indexOf(element)) ? 1:0;
      
    }); 
    
    return same+'A'+diff+'B';
};
module.exports = CompearNumber;
