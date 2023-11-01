//  Implement a function to find the longest substring without repeating characters in a given string.

function findLongestSubstring(str) {
    let longest = 0; // Length of the longest substring
    let start = 0; // Start index of the current substring
    const seen = {}; // A map to store the last index of each character

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // If the character has been seen before in the current substring and its last occurrence is after the start index
        if (seen[char] >= start) {
            start = seen[char] + 1;
        }

        // Update the last seen index of the character
        seen[char] = i;

        // Calculate the length of the current substring and update the longest if necessary
        const currentLength = i - start + 1;
        longest = Math.max(longest, currentLength);
    }

    return longest;
}

// Example usage:
const inputString = "abcabcbb";
const longestSubstring = findLongestSubstring(inputString);
console.log(longestSubstring); // Output: 3 (Longest substring without repeating characters is "abc")
