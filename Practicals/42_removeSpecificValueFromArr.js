// Implement a function to remove a specific value from an array.

function removeValueFromArray(arr, valueToRemove) {
    return arr.filter(item => item !== valueToRemove);
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const valueToRemove = 3;
const newArray = removeValueFromArray(originalArray, valueToRemove);
console.log(newArray); // Output: [1, 2, 4, 5]

