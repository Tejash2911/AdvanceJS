// program to count occurrence of each character in a string

function countCharacterOccurrences(str) {
    const charCount = {};

    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

// Example usage:
const inputString = "hello world";
const occurrenceCount = countCharacterOccurrences(inputString);
console.log(occurrenceCount);
