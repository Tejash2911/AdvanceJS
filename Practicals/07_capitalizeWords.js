// program to Capitalize first letter of each word

function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, (match) => match.toUpperCase());
}

const sentence = "hello world, how are you?";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);
// Output: "Hello World, How Are You?"
