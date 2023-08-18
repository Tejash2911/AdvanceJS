// program to flatten nested array

function flattenArray(arr) {
    let flattened = [];

    for (const element of arr) {
        if (Array.isArray(element)) {
            flattened = flattened.concat(flattenArray(element));
        } else {
            flattened.push(element);
        }
    }

    return flattened;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
