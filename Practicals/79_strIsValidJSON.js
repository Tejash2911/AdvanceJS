// Check if a given string is a valid JSON

function isValidJSON(jsonString) {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (error) {
        return false;
    }
}

// Example usage:
const validJSONString = '{"key": "value"}';
const invalidJSONString = '{"key": "value",}';

console.log(isValidJSON(validJSONString)); // Output: true
console.log(isValidJSON(invalidJSONString)); // Output: false
