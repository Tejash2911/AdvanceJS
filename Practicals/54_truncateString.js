// Create a function to truncate a string to a specified length and add "..." if it exceeds the limit.

function truncateString(inputString, maxLength) {
    if (inputString.length <= maxLength) {
        return inputString; // No truncation needed
    }

    const truncated = inputString.substring(0, maxLength) + "...";
    return truncated;
}

// Example usage:
const longString = "This is a very long string that needs to be truncated.";
const maxLength = 20;
const truncated = truncateString(longString, maxLength);
console.log(truncated);
