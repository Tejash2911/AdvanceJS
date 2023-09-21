// Check if an array of numbers is in ascending or descending order.

function isSorted(arr) {
    // Check for ascending order
    let isAscending = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            isAscending = false;
            break;
        }
    }

    // Check for descending order
    let isDescending = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            isDescending = false;
            break;
        }
    }

    // Determine the result
    if (isAscending && !isDescending) {
        return "Ascending";
    } else if (!isAscending && isDescending) {
        return "Descending";
    } else {
        return "Unsorted";
    }
}

// Example usage:
const ascendingArray = [1, 2, 3, 4, 5];
const descendingArray = [5, 4, 3, 2, 1];
const unsortedArray = [1, 3, 2, 4, 5];

console.log(isSorted(ascendingArray)); // Output: "Ascending"
console.log(isSorted(descendingArray)); // Output: "Descending"
console.log(isSorted(unsortedArray)); // Output: "Unsorted"
