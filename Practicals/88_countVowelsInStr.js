//  Create a function to find the number of vowels in a string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// Example usage:
const text = "Hello, World!";
const vowelCount = countVowels(text);
console.log(vowelCount); // Output: 3 (There are three vowels: e, o, o)
