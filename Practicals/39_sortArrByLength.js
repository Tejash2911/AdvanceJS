// Sort an array of strings based on their length.

function sortByLength(arr) {
    return arr.sort((a, b) => {
        return a.length - b.length;
    });
}

// Example usage:
const arrayOfStrings = ["apple", "banana", "cherry", "date"];
const sortedArray = sortByLength(arrayOfStrings);
console.log(sortedArray); // Output: ["date", "apple", "banana", "cherry"]
