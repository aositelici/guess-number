var AnswerGenerator = function () {
  this.Math = Math;
};

AnswerGenerator.prototype.getGenerator = function(){

	var result = [];
	while(result.length < 4) {
		var randomNumber = Math.floor(this.Math.random()*10);
		if(result.indexOf(randomNumber) === -1) {
			result.push(randomNumber );
		}
	}
    return result.join('');
}

module.exports = AnswerGenerator;
