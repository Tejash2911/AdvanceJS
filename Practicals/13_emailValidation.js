// program to validate an email address

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

// Example usage:
const email1 = "test@example.com";
const email2 = "invalid_email";

console.log(validateEmail(email1)); // Output: true
console.log(validateEmail(email2)); // Output: false
