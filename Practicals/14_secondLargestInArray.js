// program to find the second largest element in array

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return "Array must have at least two elements";
//     }

//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
//             secondLargest = arr[i];
//         }
//     }

//     if (secondLargest === -Infinity) {
//         return "No second largest element found";
//     }

//     return secondLargest;
// }

// // Example usage:
// const numbers = [10, 5, 20, 8, 15];
// const secondLargestNumber = findSecondLargest(numbers);
// console.log(secondLargestNumber); // Output: 15


// method 2

function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array must have at least two elements";
    }

    // Sort the array in descending order
    const sortedArr = arr.sort((a, b) => b - a);

    // Find the second largest element (at index 1 after sorting)
    return sortedArr[1];
}

// Example usage:
const numbers = [10, 5, 20, 8, 15];
const secondLargestNumber = findSecondLargest(numbers);
console.log(secondLargestNumber); // Output: 15
