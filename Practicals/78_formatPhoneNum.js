// Create a function to format a phone number in a specific pattern(e.g., "1234567890" becomes "(123) 456-7890").

function formatPhoneNumber(phoneNumber) {
    // Remove all non-digit characters from the phone number
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    // Check if the cleaned number has the correct length (10 digits)
    if (cleanedNumber.length !== 10) {
        return "Invalid phone number";
    }

    // Use regular expressions to apply the desired formatting
    const formattedNumber = cleanedNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

    return formattedNumber;
}

// Example usage:
const phoneNumber = "123-456-7890";
const formatted = formatPhoneNumber(phoneNumber);
console.log(formatted); // Output: "(123) 456-7890"
