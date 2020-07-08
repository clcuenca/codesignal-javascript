/**
 * Returns the sum of the given number's digits
 *
 * Problem #1
 *
 * @author Carlos L. Cuenca
 * @date 07/08/2020
 * @param int n The number to sum digits
 * @return int the sum of the number's digits
 */
function addTwoNumbers(n) {

	return parseInt(n / 10) + parseInt(n % 10);

}