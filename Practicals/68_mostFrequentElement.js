//  Implement a function to find the mode(most frequent element) of an array

function findMode(arr) {
    if (arr.length === 0) {
        return null; // No mode for an empty array
    }

    const elementCount = {};

    // Count the occurrences of each element in the array
    arr.forEach(element => {
        if (element in elementCount) {
            elementCount[element]++;
        } else {
            elementCount[element] = 1;
        }
    });

    let mode = null;
    let maxCount = 0;

    // Find the element with the highest count (mode)
    for (const element in elementCount) {
        if (elementCount[element] > maxCount) {
            maxCount = elementCount[element];
            mode = element;
        }
    }

    return mode;
}

// Example usage:
const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const mode = findMode(numbers);
console.log(mode); // Output: 4 (4 is the mode in the array)
