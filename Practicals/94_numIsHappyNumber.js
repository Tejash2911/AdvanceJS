// Check if a given number is a happy number(sum of the squares of its digits eventually becomes 1).

function isHappyNumber(num) {
    const seenNumbers = new Set();

    while (num !== 1 && !seenNumbers.has(num)) {
        seenNumbers.add(num);
        num = sumOfSquares(num);
    }

    return num === 1;
}

function sumOfSquares(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10) ** 2, 0);
}

// Example usage:
console.log(isHappyNumber(19)); // Output: true (19 is a happy number)
console.log(isHappyNumber(2));  // Output: false (2 is an unhappy number)
