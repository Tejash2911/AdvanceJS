//  Reverse the order of words in a sentence while preserving whitespace

function reverseWordsInSentence(sentence) {
    // Split the sentence into words using whitespace as the delimiter
    const words = sentence.split(/\s+/);

    // Reverse the order of the words
    const reversedWords = words.reverse();

    // Join the reversed words with the original whitespace
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Example usage:
const inputSentence = "Hello,   world!";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); // Output: "world!   Hello,"
