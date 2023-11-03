// Implement a function to find the average of all elements in an array, excluding the maximum and minimum values.

function findAverageExcludingMinMax(arr) {
    if (arr.length <= 2) {
        return 0; // Cannot exclude both min and max when the array has 2 or fewer elements
    }

    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const sum = arr.reduce((acc, current) => acc + current, 0);
    const average = (sum - min - max) / (arr.length - 2);

    return average;
}

// Example usage:
const numbers = [3, 6, 9, 12, 15];
const avg = findAverageExcludingMinMax(numbers);
console.log(avg); // Output: 9 (average of numbers excluding the min and max)

