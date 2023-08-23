// program to find the first non-repeated character in string

function findFirstNonRepeatedCharacter(str) {
    const charCount = {};

    // Count the occurrences of each character
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find the first character with a count of 1
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeated character is found
}

// Example usage:
const inputString = "programming";
const firstNonRepeated = findFirstNonRepeatedCharacter(inputString);
console.log(firstNonRepeated); // Output: "p"
