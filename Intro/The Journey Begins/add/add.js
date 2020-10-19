/**
 * CodeSignal - Intro - The Journey Begins
 * add
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

	var parameters = line.split(" ");

	console.log(add(parseInt(parameters[0], 10), parseInt(parameters[1], 10)));

});

/**
 * Adds two numbers & returns the result
 *
 * @author: Carlos L. Cuenca
 * @since: 10/06/2020
 * @param Number param1 The first number to add
 * @param Number param2 The second number to add
 * @return Number the result of the addition operation
 */
function add(param1, param2) {

 	return param1 + param2;

}




