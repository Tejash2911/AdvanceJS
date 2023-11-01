//  Check if a given number is a Fibonacci number

function isPerfectSquare(n) {
    const sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
}

function isFibonacciNumber(number) {
    if (number <= 0) {
        return false;
    }

    const condition1 = isPerfectSquare(5 * number * number + 4);
    const condition2 = isPerfectSquare(5 * number * number - 4);

    return condition1 || condition2;
}

// Example usage:
console.log(isFibonacciNumber(5)); // Output: true (5 is a Fibonacci number)
console.log(isFibonacciNumber(7)); // Output: false (7 is not a Fibonacci number)
