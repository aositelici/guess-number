'use strict';

var _ = require('lodash');
var  AnswerGenerator = require('../main/answer-generator');

describe('answer-generator:', function (){
  describe('#generator',function () {
    var answergenerator,result;

    beforeEach( function() {

      answergenerator = new AnswerGenerator();
      result = answergenerator.getGenerator();

    });

    it(' length should be 4', function () {

      result = answergenerator.getGenerator();
      expect(result.length).toBe(4);

    });

    it("each digit should be different,then expect to be 0", function() {

      var flag = 0;

      for(var i = 0; i < 4; i++) {

        for(var x = 0; x < 4; x++) {

          if(result[i] === result[x] && i!==x) {

            flag = 1;
            break;
          }
        }
      }

      expect(flag).toBe(0);

    });
  
    it("should be a random result", function() {
      var count = 0;
      spyOn(_, 'random').and.callFake(function() {
        var numbers = [1,1,2,3,4];
        return numbers[count++];
    });
      expect(answergenerator.getGenerator()).toBe('1234');

    });
  });
});
