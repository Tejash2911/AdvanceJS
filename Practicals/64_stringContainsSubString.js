// Check if a given string contains a specific substring

function containsSubstring(string, substring) {
    return string.indexOf(substring) !== -1;
}

// Example usage:
const myString = "Hello, world!";
const subString = "world";
console.log(containsSubstring(myString, subString)); // Output: true
