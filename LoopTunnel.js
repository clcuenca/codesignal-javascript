
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

// --------------------------------------------------------
// Calculates the amount of money given by the magical well
// when casting a marble
//
// Problem #27
//
// @author Carlos L. Cuenca
// @date 07/05/2020

function magicalWell(a,b,n) {

	var salary = 0

	while(n > 0) {

		salary += a*b

		a++
		b++
		n--

	}

	return salary

}