//  Create a function to truncate a paragraph to a specified number of characters, keeping whole words.

function truncateParagraph(paragraph, maxLength) {
    if (paragraph.length <= maxLength) {
        return paragraph;
    }

    let truncatedText = paragraph.substring(0, maxLength);
    // Find the last space in the truncated text
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');

    // If a space is found, truncate to the last space
    if (lastSpaceIndex !== -1) {
        truncatedText = truncatedText.substring(0, lastSpaceIndex);
    }

    return truncatedText;
}

// Example usage:
const originalParagraph = "This is an example paragraph that needs to be truncated to a certain length.";
const maxLength = 50;
const truncatedParagraph = truncateParagraph(originalParagraph, maxLength);
console.log(truncatedParagraph);

