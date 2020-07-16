
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