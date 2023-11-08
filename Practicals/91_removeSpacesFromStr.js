// Create a function to remove all spaces from a string.

function removeSpaces(inputString) {
    return inputString.replace(/\s/g, '');
}

// Example usage:
const text = "This is a sample text with spaces.";
const textWithoutSpaces = removeSpaces(text);
console.log(textWithoutSpaces); // Output: "Thisisasampletextwithspaces."


// without using regular expressions
function removeSpacesFromString(inputString) {
    const words = inputString.split(' '); // Split the string into words using space as the delimiter
    const resultString = words.join(''); // Join the words back together without spaces

    return resultString;
}

// Example usage:
const text2 = "This is a sample string with spaces.";
const textWithoutSpaces2 = removeSpacesFromString(text2);
console.log(textWithoutSpaces2);
