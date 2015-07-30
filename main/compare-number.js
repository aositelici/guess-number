'use strict';

var CompearNumber = function CompearNumber() {
  };

  CompearNumber.prototype.compearNumber = function(answer,input) {

    var same = 0,diff = 0;
    for(var i =0; i < 4; i++) {
      for(var x =0; x < 4; x++) {
         if(answer.charAt(i) === input.charAt(x) && i===x ) {
           same++;
         }

         if(answer.charAt(i) === input.charAt(x) && i!==x ) {
           diff++;
         }
      }
    }
    return same.toString()+'A'+diff.toString()+'B';
  };

module.exports = CompearNumber;
