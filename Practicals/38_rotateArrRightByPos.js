//  Implement a function to rotate an array to the right by a specified number of positions.

function rotateArrayRight(arr, positions) {
    if (arr.length === 0) {
        return arr;
    }

    const numPositions = positions % arr.length; // Handle cases where positions > arr.length

    // Use array slicing to rotate the array
    const rotatedPart = arr.slice(-numPositions);
    const restOfArray = arr.slice(0, arr.length - numPositions);
    const rotatedArray = rotatedPart.concat(restOfArray);

    return rotatedArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const positionsToRotate = 2;
const rotatedArray = rotateArrayRight(originalArray, positionsToRotate);
console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]
