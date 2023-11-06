// Check if a given number is a narcissistic number(sum of its digits raised to the power of the number of digits equals the number itself)

function isNarcissisticNumber(number) {
    const numStr = number.toString();
    const numDigits = numStr.length;
    let sumOfPowers = 0;

    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i], 10);
        sumOfPowers += Math.pow(digit, numDigits);
    }

    return sumOfPowers === number;
}

// Example usage:
console.log(isNarcissisticNumber(153)); // Output: true (1^3 + 5^3 + 3^3 = 153)
console.log(isNarcissisticNumber(370)); // Output: true (3^3 + 7^3 + 0^3 = 370)
console.log(isNarcissisticNumber(371)); // Output: true (3^3 + 7^3 + 1^3 = 371)
console.log(isNarcissisticNumber(407)); // Output: true (4^3 + 0^3 + 7^3 = 407)
console.log(isNarcissisticNumber(123)); // Output: false (1^3 + 2^3 + 3^3 ≠ 123)
