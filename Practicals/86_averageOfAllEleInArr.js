// Implement a function to find the average of all elements in an array

function findAverage(arr) {
    if (arr.length === 0) {
        return 0; // Avoid division by zero for empty arrays
    }

    const sum = arr.reduce((acc, current) => acc + current, 0);
    const average = sum / arr.length;

    return average;
}

// Example usage:
const numbers = [3, 6, 9, 12, 15];
const avg = findAverage(numbers);
console.log(avg); // Output: 9 (average of the numbers)
