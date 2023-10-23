//  Implement a function to find the average of an array of numbers.

function findAverage(numbers) {
    if (numbers.length === 0) {
        return 0; // Avoid division by zero for an empty array
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    return average;
}

// Example usage:
const numberArray = [1, 2, 3, 4, 5];
const avg = findAverage(numberArray);
console.log(avg); // Output: 3 (average of the numbers in the array)
