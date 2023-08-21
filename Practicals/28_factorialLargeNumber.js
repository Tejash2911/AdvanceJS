// program to find factorial of large number using bigInt

function calculateFactorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }

    if (n === 0 || n === 1) {
        return 1n; // Return BigInt 1
    } else {
        return BigInt(n) * calculateFactorial(n - 1);
    }
}

// Example usage:
const num = 100; // Replace with your desired large number
const result = calculateFactorial(num);
console.log(result.toString()); // Output: A very large number
