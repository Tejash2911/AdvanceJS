//  Check if a given string contains only unique characters.

function hasUniqueCharacters(str) {
    const charSet = new Set(); // Create an empty Set to store encountered characters

    for (const char of str) {
        if (charSet.has(char)) {
            return false; // If the character is already in the Set, it's not unique
        }
        charSet.add(char); // Add the character to the Set
    }

    return true; // All characters in the string are unique
}

// Example usage:
const inputString = "abcdefg";
const isUnique = hasUniqueCharacters(inputString);
console.log(isUnique); // Output: true (all characters are unique)
