//  Implement a function to find the median of an array of numbers.

function findMedian(arr) {
    const sortedArray = arr.slice().sort((a, b) => a - b); // Sort the array in ascending order

    const middle = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
        // If the array has an even number of elements, return the average of the middle two elements
        return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    } else {
        // If the array has an odd number of elements, return the middle element
        return sortedArray[middle];
    }
}

// Example usage:
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const median = findMedian(numbers);
console.log(median); // Output: 4 (the median of the array)
