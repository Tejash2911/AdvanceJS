// Calculate the power (exponentiation) of a number.

function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

// Example usage:
const base = 2;
const exponent = 3;
const result = calculatePower(base, exponent);
console.log(result); // Output: 8 (2^3)

// method 2 - Using the exponentiation () operator:**

function calculatePower1(base1, exponent1) {
    return base1 ** exponent1;
}

// Example usage:
const base1 = 2;
const exponent1 = 3;
const result1 = calculatePower(base1, exponent1);
console.log(result1); // Output: 8 (2^3)
