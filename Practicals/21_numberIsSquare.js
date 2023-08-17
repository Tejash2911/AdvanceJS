// program to check if a number is a perfect square.

function isPerfectSquare(number) {
    const sqrt = Math.sqrt(number);
    return Number.isInteger(sqrt);
}

// Example usage:
console.log(isPerfectSquare(25)); // Output: true (5 * 5 = 25)
console.log(isPerfectSquare(30)); // Output: false
