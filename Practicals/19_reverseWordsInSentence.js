// program to reverse words in a sentence.

function reverseWords(sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.reverse();
    const reversedSentence = reversedWords.join(" ");
    return reversedSentence;
}

// Example usage:
const sentence = "The quick brown fox";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: "fox brown quick The"
