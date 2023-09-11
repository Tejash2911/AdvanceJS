// Calculate the sum of squares of numbers in an array

function sumOfSquares(arr) {
    let sum = 0;

    for (const num of arr) {
        sum += num * num;
    }

    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const result = sumOfSquares(numbers);
console.log(result); // Output: 55 (1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55)
