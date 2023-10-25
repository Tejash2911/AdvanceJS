// Create a function to capitalize the first letter of each word in a sentence while excluding specific words(e.g., "and," "the").

function capitalizeWords(sentence, excludedWords = []) {
    // Split the sentence into words
    const words = sentence.split(/\s+/);

    // Define a function to capitalize the first letter of a word
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    // Capitalize each word while checking for exclusions
    const capitalizedWords = words.map((word) => {
        const lowercaseWord = word.toLowerCase();
        // Check if the lowercase word is in the list of excluded words
        if (excludedWords.includes(lowercaseWord)) {
            return word; // Don't capitalize excluded words
        } else {
            return capitalizeFirstLetter(word);
        }
    });

    // Join the capitalized words back into a sentence
    const capitalizedSentence = capitalizedWords.join(' ');

    return capitalizedSentence;
}

// Example usage:
const sentence = "this is a sample sentence and a test";
const excluded = ["and", "a"];
const result = capitalizeWords(sentence, excluded);
console.log(result); // Output: "This is A Sample Sentence and A Test"
