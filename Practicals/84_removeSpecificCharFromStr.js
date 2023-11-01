// Create a function to remove all occurrences of a specific character from a string.

function removeCharacterFromString(inputString, charToRemove) {
    // Use the split method to split the string into an array of substrings
    const substrings = inputString.split(charToRemove);

    // Use the join method to rejoin the substrings into a single string
    const resultString = substrings.join('');

    return resultString;
}

// Example usage:
const inputString = "Hello, World!";
const charToRemove = "o";
const modifiedString = removeCharacterFromString(inputString, charToRemove);
console.log(modifiedString); // Output: "Hell, Wrld!"
