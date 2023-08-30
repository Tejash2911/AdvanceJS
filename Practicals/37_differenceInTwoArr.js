// Find the difference between two arrays (elements that exist in the first array but not in thesecond, and vice versa).

function arrayDifference(arr1, arr2) {
    const difference = [];

    // Check elements in arr1 that are not in arr2
    for (const element of arr1) {
        if (!arr2.includes(element)) {
            difference.push(element);
        }
    }

    // Check elements in arr2 that are not in arr1
    for (const element of arr2) {
        if (!arr1.includes(element)) {
            difference.push(element);
        }
    }

    return difference;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const result = arrayDifference(array1, array2);
console.log(result); // Output: [1, 2, 6, 7]
