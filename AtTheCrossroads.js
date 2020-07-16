
/**
 * Given experience, threshold,  & reward; this function will return
 * a boolean denoting if the player is to reach the next level.
 * 
 * Problem #9
 *
 * @author: Carlos L. Cuenca
 * @since: 07/16/2020
 * @param number experience The amount of experience earned
 * @param number threshold The amount of experience needed to level up
 * @param number reward The amount of awarded experience
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
 * @param number value1 The value of the first stone
 * @param number weight1 The weight of the first stone
 * @param number value2 The value of the second stone
 * @param number weight2 The weight of the second stone
 * @return number Value of the maximum amount of stones that can be carried
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
 * @param a number The first value
 * @param b number The second value
 * @param c number The third value
 * @return The unique value out of all three numbers.
 */

function extraNumber(a, b, c) {

	return a ^ b ^ c;

}