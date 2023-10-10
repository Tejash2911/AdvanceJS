// Function to find the Greatest Common Divisor (GCD) using the Euclidean algorithm
function findGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to find the Least Common Multiple (LCM) of two numbers
function findLCM(a, b) {
    // Calculate the LCM using the formula LCM(a, b) = (a * b) / GCD(a, b)
    return (a * b) / findGCD(a, b);
}

// Example usage:
const num1 = 12;
const num2 = 18;
const lcm = findLCM(num1, num2);
console.log(lcm); // Output: 36 (LCM of 12 and 18)
