// Program to capitalize the first letter of each sentence in a paragraph.

function capitalizeSentences(paragraph) {
    // Use regular expressions to split the paragraph into sentences
    const sentences = paragraph.split(/([.!?])\s+/);

    // Capitalize the first letter of each sentence and rejoin them
    const capitalizedParagraph = sentences
        .map(sentence => {
            if (sentence) { // Check for non-empty sentences
                return sentence.charAt(0).toUpperCase() + sentence.slice(1);
            }
            return sentence; // Preserve empty sentences
        })
        .join(' ');

    return capitalizedParagraph;
}

// Example usage:
const paragraph = "this is the first sentence. this is the second sentence! and this is the third sentence?";
const capitalized = capitalizeSentences(paragraph);
console.log(capitalized);
