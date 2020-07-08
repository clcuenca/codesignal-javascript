/**
 * Returns the sum of the given number's digits
 *
 * Problem #1
 *
 * @author Carlos L. Cuenca
 * @date 07/08/2020
 * @param {Number} n The number to sum digits
 * @return {Number} The sum of the number's digits
 */

function addTwoNumbers(n) {

	return parseInt(n / 10) + parseInt(n % 10);

}

/**
 * Returns the largest base 10 number given the amount of digits, n
 *
 * Problem #2
 *
 * @author Carlos L. Cuenca
 * @date 07/08/2020
 * @param {Number} the amount of digits the number should have
 * @return {Number} The largest resulting number with n digits
 */
function largestNumber(n) {

	return 10**n - 1;

}

/**
 * Returns the total amount of whole candy pieces that will be eaten by n children,
 * such that each child eats the same amount of candy as the other children
 * without splitting a candy piece given m total candies.
 * 
 * Problem #3
 *
 * @author Carlos L. Cuenca
 * @date 07/08/2020
 * @param {Number} n The total amount of children
 * @param {Number} m The total amount of candy pieces
 * @param {Number} The total amount of candy that will be eaten between 
 * the children
 */
function candies(n, m) {

	return n * parseInt(m / n);

}

/**
 * Returns the amount of people behind you, and to the left given the current
 * rows and columns in the theater and your current row and column within the 
 * theater
 *
 * Problem #4
 * 
 * @author Carlos L. Cuenca
 * @date 07/08/2020
 * @param {Number} nCols The amount of columns in the theater
 * @param {Number} nRows The amount of rows in the theater
 * @param {Number} col The current column you're residing in
 * @param {Number} row The current row you're residing in
 */

function seatsInTheater(nCols, nRows, col, row) {

	return (nCols - col + 1)*(nRows - row);

}


/**
 * Returns a largest integer n such that n is divisible by divisor
 * and less than or equal to the bound. The function will subtract the remainder
 * of bound divided by the divisor from the bound to reach the largest n
 *
 * Problem #5
 *
 * @author Carlos L. Cuenca
 * @date 07/08/2020
 * @param {Number} divisor The multiple of n
 * @param {Number} bound The highest n  can reach
 */
function maxMultiple(divisor, bound) {
	
	return bound - parseInt(bound % divisor);

}

/**
 * Given the amount of numbers in a circle, n, and the firstNumber
 * this function will return the radially opposite number from firstNumber
 * within the given range of numbers.
 * Since there are some radially opposite numbers that are less than 
 * the given firstNumber this function takes into account wrap-around
 *
 * Problem #6
 *
 * @author Carlos L. Cuenca
 * @date 7/08/2020
 * @param {Number} n The amount of numbers in the circle
 * @param {Number} firstNumber The number that is the point of reference
 * @return {Number} The radially opposite number from firstNumber
 */
function circleOfNumbers(n, firstNumber) {

	return (firstNumber + (n / 2)) % n

}

/**
 * Given n minutes, returns the sum of the digits displayed as the time after
 * 00:00
 * 
 * Problem #7
 *
 * @author: Carlos L. Cuenca
 * @since: 07/08/2020
 * @param {Number} n The amount of minutes elapsed after 00:00
 * @return {Number} the sum of the digits of n minutes ater 00:00
 */
function lateRide(n) {

	return parseInt(n/60/10) + parseInt(n/60%10) + parseInt(n%60/10) + parseInt(n%60%10);

}