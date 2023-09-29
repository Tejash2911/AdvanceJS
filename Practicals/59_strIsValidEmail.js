// Check if a given string is a valid email address.

function isValidEmail(email) {
    // Regular expression for matching email addresses
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Use the test method of the regular expression to check if the email matches the pattern
    return emailPattern.test(email);
}

// Example usage:
const emailAddress1 = "user@example.com";
const emailAddress2 = "invalid-email";
console.log(isValidEmail(emailAddress1)); // Output: true (valid email address)
console.log(isValidEmail(emailAddress2)); // Output: false (not a valid email address)
