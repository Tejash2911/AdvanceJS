// program to find given string is palindrome or not

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the original string with its reverse
    return str === str.split('').reverse().join('');
}

const inputString = "A man, a plan, a canal, Panama!";
const result = isPalindrome(inputString);
console.log(result); // Output: true
