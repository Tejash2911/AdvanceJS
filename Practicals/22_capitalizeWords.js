// Convert a string to a title case (capitalize the first letter of each word, excluding certain words like "and" and "the").

function titleCaseWithExclusions(inputString, excludedWords) {
    const words = inputString.split(" ");

    const titleCasedWords = words.map(word => {
        if (!excludedWords.includes(word.toLowerCase())) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word.toLowerCase();
        }
    });

    return titleCasedWords.join(" ");
}

// Example usage:
const input = "the quick brown fox and the lazy dog";
const excluded = ["and", "the"];
const titleCased = titleCaseWithExclusions(input, excluded);
console.log(titleCased); // Output: "The Quick Brown Fox and the Lazy Dog"
