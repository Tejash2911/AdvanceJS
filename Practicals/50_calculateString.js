// Implement a function to perform basic arithmetic operations using a string input (e.g., "2 + 3" returns 5).

function calculateString(input) {
    try {
        // Use eval() to evaluate the input as a JavaScript expression
        const result = eval(input);

        // Check if the result is a valid number
        if (typeof result === 'number' && !isNaN(result)) {
            return result;
        } else {
            throw new Error('Invalid input');
        }
    } catch (error) {
        return 'Error';
    }
}

// Example usage:
const expression = "2 + 3";
const result = calculateString(expression);
console.log(result); // Output: 5
