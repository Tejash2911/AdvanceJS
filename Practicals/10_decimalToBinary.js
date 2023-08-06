// program to convert decimal number to binary representation

function decimalToBinary(decimalNumber) {
    return decimalNumber.toString(2);
}

// Example usage:
const number = 42;
const binaryRepresentation = decimalToBinary(number);
console.log(binaryRepresentation); // Output: "101010"
