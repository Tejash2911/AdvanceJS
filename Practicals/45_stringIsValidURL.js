// Check if a given string is a valid URL.

function isValidURL(url) {
    // Regular expression for a basic URL pattern
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-zA-Z]{2,})(:\d{1,5})?(\/\S*)?$/;

    // Use the test method of the regular expression to check if the URL matches the pattern
    return urlPattern.test(url);
}

// Example usage:
const url1 = "https://www.example.com";
const url2 = "ftp://invalid-url";
console.log(isValidURL(url1)); // Output: true
console.log(isValidURL(url2)); // Output: false
