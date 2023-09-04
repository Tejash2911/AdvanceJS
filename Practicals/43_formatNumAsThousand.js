//  Create a function to format a number with commas as thousands separators

function formatNumberWithCommas(number) {
    return number.toLocaleString();
}

// Example usage:
const number = 1234567;
const formattedNumber = formatNumberWithCommas(number);
console.log(formattedNumber); // Output: "12,34,567"
