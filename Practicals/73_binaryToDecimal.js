// Implement a function to convert a binary number to a decimal number.

function binaryToDecimal(binaryString) {
    // Check if the input is a valid binary string
    if (!/^[01]+$/.test(binaryString)) {
        return "Invalid binary input";
    }

    // Use the parseInt function to convert the binary string to a decimal number
    const decimalNumber = parseInt(binaryString, 2);

    return decimalNumber;
}

// Example usage:
const binaryString = "1101";
const decimalNumber = binaryToDecimal(binaryString);
console.log(decimalNumber); // Output: 13
