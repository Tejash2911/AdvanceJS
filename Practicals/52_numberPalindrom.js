// Implement a function to check if a number is a palindrome.

function isPalindromeNumber(number) {
    const numberStr = number.toString(); // Convert the number to a string
    const reversedStr = numberStr.split('').reverse().join(''); // Reverse the string

    return numberStr === reversedStr;
}

// Example usage:
const num1 = 121;
const num2 = 12345;
console.log(isPalindromeNumber(num1)); // Output: true (121 is a palindrome)
console.log(isPalindromeNumber(num2)); // Output: false (12345 is not a palindrome)

