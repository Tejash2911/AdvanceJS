// Check if a given string is a valid hex color code.

function isValidHexColorCode(colorCode) {
    const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;

    return hexColorRegex.test(colorCode);
}

// Example usage:
console.log(isValidHexColorCode("#123"));     // Output: true (valid hex color code)
console.log(isValidHexColorCode("#ABCDEF"));  // Output: true (valid hex color code)
console.log(isValidHexColorCode("#12G456"));  // Output: false (invalid hex color code)
