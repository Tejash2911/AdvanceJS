// basic calclulator (addition, substraction, multiplication, division)

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Example usage:
const num1 = 10;
const num2 = 5;

console.log("Addition:", add(num1, num2)); // Output: 15
console.log("Subtraction:", subtract(num1, num2)); // Output: 5
console.log("Multiplication:", multiply(num1, num2)); // Output: 50
console.log("Division:", divide(num1, num2)); // Output: 2
