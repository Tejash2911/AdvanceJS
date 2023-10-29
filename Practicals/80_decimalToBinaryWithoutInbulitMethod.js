//  Implement a function to convert a decimal number to its binary representation without using the built -in method

function decimalToBinary(decimalNumber) {
    if (decimalNumber === 0) {
        return '0';
    }

    let binary = '';
    while (decimalNumber > 0) {
        binary = (decimalNumber % 2) + binary;
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    return binary;
}

// Example usage:
const decimalNumber = 13;
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(binaryRepresentation); // Output: "1101"
