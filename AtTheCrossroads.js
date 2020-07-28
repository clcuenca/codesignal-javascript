
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
 * Problem #12
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

/**
 * Given two scores (score1 & score2) this function returns a boolean value indicating
 * if a tennis set can be completed
 *
 * Problem #14
 *
 * @param score1 The first player's score
 * @param score2 The second player's score
 * @return boolean value indicating a completable
 */
function tennisSet(score1, score2) {

	if((score1 + score2) >= 6) {

		if((score1 == 6) && score2 < 5) {

			return true;

		}

		if((score2 == 6) && score1 < 5) {

			return true;

		}
        
    }

	if((score1 + score2) >= 12) {

		if((score1 == 7) && ((score2 == 5) || (score2 == 6))) {
			
            return true;

		}

		if((score2 == 7) && ((score1 == 5) || (score1 == 6))) {

			return true;

		}

	}

	return false;

}

/**
 * Returns a boolean value that shatters expectations
 *
 * Problem #15
 *
 * @param young Young
 * @param beautiful Beautiful
 * @param loved Loved
 * @return Truth shattering boolean value
 */
function willYou(young, beautiful, loved) {

	return (young && beautiful && !loved) ^ (loved && !(young && beautiful)) != 0 ? true : false;

}

/**
 * Given The last number of days, this method returns the possible number of days
 * the metro card will refill by.
 *
 * Problem #16
 *
 * @param Number lastNumberOfDays The last number of days the card was filled
 * @return array containing the possible refill
 */
function metroCard(lastNumberOfDays) {

    var returnArray;

    var MONTH_30 = 30;
    var MONTH_31 = 31;
    var MONTH_28 = 28;

    // January, March, May, July, August, October, December
    if(lastNumberOfDays == MONTH_31){

        returnArray = [MONTH_28, MONTH_30, MONTH_31];

            // Feburary, April, June, September, November
    } else {

        returnArray = [MONTH_31];

    }

    return returnArray;

}