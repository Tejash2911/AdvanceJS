// Create a function to find the GCD(Greatest Common Divisor) of two numbers

function findGCD(a, b) {
    // Ensure that a and b are positive integers
    a = Math.abs(a);
    b = Math.abs(b);

    // Use the Euclidean algorithm to find the GCD
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

// Example usage:
const num1 = 48;
const num2 = 18;
const gcd = findGCD(num1, num2);
console.log(gcd); // Output: 6 (GCD of 48 and 18)
