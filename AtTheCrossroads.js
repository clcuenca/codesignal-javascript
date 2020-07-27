
/**
 * Given experience, threshold,  & reward; this function will return
 * a boolean denoting if the player is to reach the next level.
 * 
 * Problem #9
 *
 * @author: Carlos L. Cuenca
 * @since: 07/16/2020
 * @param Number experience The amount of experience earned
 * @param Number threshold The amount of experience needed to level up
 * @param Number reward The amount of awarded experience
 * @return boolean value denoting if the next level has been reached
 */
function reachNextLevel(experience, threshold, reward) {

	return (experience + reward) >= threshold;

}

/**
 * Two weights, their values, & the maximum amount of weight that 
 * can be carried, this method returns the maximum value of the weights
 * 
 * Problem #10
 *
 * @author: Carlos L. Cuenca
 * @since: 07/16/2020
 * @param Number value1 The value of the first stone
 * @param Number weight1 The weight of the first stone
 * @param Number value2 The value of the second stone
 * @param Number weight2 The weight of the second stone
 * @return Number Value of the maximum amount of stones that can be carried
 */
function knapsackLight(value1, weight1, value2, weight2, maxW) {

	if((weight1 + weight2) <= maxW) {

		return value1 + value2;

	}

	if((weight1 > maxW) && (weight2 > maxW)) {

		return 0;

	}

	if(value1 >= value2 || weight2 > maxW) {

		return value1;

	}

	return value2;

}

/**
 * Given three numbers where two are the same number, this method will return
 * the extra unique number via xor result of all numbers.
 * 
 * Problem #11
 *
 * @author Carlos L. Cuenca
 * @since: 07/16/2020
 * @param a Number The first value
 * @param b Number The second value
 * @param c Number The third value
 * @return The unique value out of all three numbers.
 */
function extraNumber(a, b, c) {

	return a ^ b ^ c;

}

/**
 * Given numbers a, b, & c and an arithmetic expression in the form a#b = c
 * this function checks if it's possible to replace # with one of the four signs
 * +, -, *, or / to obtain a correct expression
 *
 * Problem #13
 * 
 * @author Carlos L. Cuenca
 * @since: 07/13/2020
 * @param a Number The value of a
 * @param b Number The value of b
 * @param c Number the Value of c 
 * @return bool indicating a proper 
 */
function isInfiniteProcess(a, b) {

	return (a > b) || ((a - b) % 2 != 0);

}

/**
 * Given a, b, & c this function returns a boolean indicating if any of the
 * arithmetic expressions are true. (a + b = c, a - b = c, a * b = c, a / b = c)
 *
 * Problem #13
 *
 * @param a Number The first term
 * @param b Number The second term
 * @param c Number The resulting term
 * @return boolean indicating if the terms equal
 */
function arithmeticExpression(a, b, c) {

	return ((a + b) == c) || ((a - b) == c) || ((a * b) == c) ||
			((a / b) == c && (a % b) == 0);

}