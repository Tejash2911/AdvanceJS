//  Implement a function to find the prime factors of a given number.

function primeFactors(num) {
    let factors = [];
    let divisor = 2;

    while (num > 1) {
        while (num % divisor === 0) {
            factors.push(divisor);
            num /= divisor;
        }
        divisor++;
    }

    return factors;
}

// Example usage:
const number = 72;
const factors = primeFactors(number);
console.log(`Prime factors of ${number}: ${factors.join(', ')}`);
