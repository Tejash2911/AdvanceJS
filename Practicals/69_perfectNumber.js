// Check if a given number is a perfect number(sum of its divisors equals the number itself).

function isPerfectNumber(number) {
    if (number <= 1) {
        return false; // Perfect numbers are greater than 1
    }

    let sumOfDivisors = 1; // Start with 1 as the first divisor

    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
            if (i !== number / i) {
                sumOfDivisors += number / i;
            }
        }
    }

    return sumOfDivisors === number;
}

// Example usage:
console.log(isPerfectNumber(6)); // Output: true (6 is a perfect number: 1 + 2 + 3 = 6)
console.log(isPerfectNumber(28)); // Output: true (28 is a perfect number: 1 + 2 + 4 + 7 + 14 = 28)
console.log(isPerfectNumber(12)); // Output: false (12 is not a perfect number)
