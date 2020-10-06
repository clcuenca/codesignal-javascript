/**
 * CodeSignal - Intro - The Journey Begins
 * centuryFromYear
 * Author: Carlos L. Cuenca
 * Date: 10/06/20
 */

var readline = require('readline');
var reader = readline.createInterface({

	input: process.stdin,
	output: process.stdout,
	terminal: false

});

reader.on('line', function(line) {

	console.log(centuryFromYear(parseInt(line, 10)));

});

function centuryFromYear(year) {

	var century = year / 100;

	if(year % 100 != 0) century++;

	return century;

}



