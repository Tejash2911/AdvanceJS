// Check if a given string is a valid date in a specified format.

function isValidDateFormat(dateString, format) {
    // Define regular expressions for supported formats
    const formatRegex = {
        "YYYY-MM-DD": /^\d{4}-\d{2}-\d{2}$/,
        "MM/DD/YYYY": /^\d{2}\/\d{2}\/\d{4}$/,
        // Add more formats as needed
    };

    // Check if the specified format is supported
    if (!formatRegex[format]) {
        return false;
    }

    // Check if the date string matches the specified format's regular expression
    return formatRegex[format].test(dateString);
}

// Example usage:
const date = "2023-09-09";
const format = "YYYY-MM-DD";

if (isValidDateFormat(date, format)) {
    console.log(`${date} is a valid date in ${format} format.`);
} else {
    console.log(`${date} is not a valid date in ${format} format.`);
}

