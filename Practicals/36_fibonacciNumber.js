//  Implement a function to calculate the nth Fibonacci number

function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

// Example usage:
const n = 10; // Replace with the desired Fibonacci number
const result = fibonacciRecursive(n);
console.log(result); // Output: 55 (the 10th Fibonacci number)
