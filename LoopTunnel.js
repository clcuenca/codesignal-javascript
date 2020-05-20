function leastFactorial(n) {

    var factorial = 1
    var result    = 1

    while(result < n) {

        factorial++

        result *= factorial

    }

    return result

}