
// -------------------------------------------------------------------
// Finds the smallest factorial result relative to the given integer n
//
// Problem #25
//
// Author: Carlos L. Cuenca
// Date: 05/19/2020

function leastFactorial(n) {

    var factorial = 1
    var result    = 1

    while(result < n) {

        factorial++

        result *= factorial

    }

    return result

}

// -------------------------------------------------------------------
// Finds the smallest factorial result relative to the given integer n
//
// Problem #26
//
// Author: Carlos L. Cuenca
// Date: 05/19/2020

function countSumOfTwoRepresentations2(n, l, r) {

	var count = 0

	for(var index = l; index <= r; index++) {

		if(index <= (n - index) && (n - index) <= r) {

			count++

		}

	}

	return count

}