// program to find longest word in a sentence.

function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(sentence);
console.log(longestWord); // Output: "quick"
