// Create a function to remove all occurrences of a specific element from an array

function removeElementFromArray(arr, elementToRemove) {
    return arr.filter(item => item !== elementToRemove);
}

// Example usage:
const originalArray = [1, 2, 3, 4, 3, 5];
const elementToRemove = 3;
const newArray = removeElementFromArray(originalArray, elementToRemove);
console.log(newArray); // Output: [1, 2, 4, 5]
