// Check if a given string is a valid credit card number in a specific format

function isValidCreditCardNumber(cardNumber) {
    // Define a regular expression pattern for a specific format (e.g., 16 digits with dashes in groups of 4)
    const pattern = /^(\d{4}-){3}\d{4}$/;

    // Test if the cardNumber matches the pattern
    return pattern.test(cardNumber);
}

// Example usage:
const creditCardNumber = "1234-5678-9012-3456";
const isValid = isValidCreditCardNumber(creditCardNumber);
console.log(isValid); // Output: true
