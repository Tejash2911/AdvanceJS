// Program to perform basic string compression (e.g., "aaabbbbcc" becomes "a3b4c2").

function compressString(str) {
    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }

    // Return the original string if the compressed string is not shorter
    return compressed.length < str.length ? compressed : str;
}

// Example usage:
const inputString = "aaabbbbcc";
const compressedString = compressString(inputString);
console.log(compressedString); // Output: "a3b4c2"
