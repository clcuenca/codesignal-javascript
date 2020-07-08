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
