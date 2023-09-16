//  Find the missing number in a given range of numbers

function findMissingNumber(arr, start, end) {
    // Calculate the sum of all numbers in the range
    const sumInRange = ((end - start + 1) * (start + end)) / 2;

    // Calculate the sum of the given numbers
    const sumOfGivenNumbers = arr.reduce((acc, num) => acc + num, 0);

    // The difference is the missing number
    return sumInRange - sumOfGivenNumbers;
}

// Example usage:
const numbers = [1, 2, 3, 5, 6];
const start = 1;
const end = 6;
const missingNumber = findMissingNumber(numbers, start, end);
console.log(missingNumber); // Output: 4 (4 is the missing number in the range)
