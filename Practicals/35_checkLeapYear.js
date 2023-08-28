// Check if a given year is a leap year.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const year = 2024;
const isLeap = isLeapYear(year);
console.log(isLeap); // Output: true (2024 is a leap year)
