// Check if a given string is a valid credit card number.

function isValidCreditCardNumber(cardNumber) {
    // Remove spaces and non-digit characters from the card number
    cardNumber = cardNumber.replace(/\D/g, '');

    // Check if the card number is a 16-digit number
    if (!/^\d{16}$/.test(cardNumber)) {
        return false;
    }

    // Apply the Luhn algorithm to validate the credit card number
    let sum = 0;
    let isSecondDigit = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i], 10);

        if (isSecondDigit) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        isSecondDigit = !isSecondDigit;
    }

    return sum % 10 === 0;
}

// Example usage:
const cardNumber = "4532015112830366"; // Example valid Visa card number
console.log(isValidCreditCardNumber(cardNumber)); // Output: true

