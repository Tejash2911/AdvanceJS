// Check if a given string is a valid time in 24 - hour format.

function isValidTime24HourFormat(timeString) {
    // Regular expression pattern to match the time in 24-hour format (HH:mm)
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    // Check if the timeString matches the pattern
    if (!timeRegex.test(timeString)) {
        return false;
    }

    // Additional checks for valid hours and minutes
    const [hours, minutes] = timeString.split(':');
    if (hours > 23 || minutes > 59) {
        return false;
    }

    return true;
}

// Example usage:
console.log(isValidTime24HourFormat("14:30"));  // Output: true (valid 24-hour time)
console.log(isValidTime24HourFormat("25:00"));  // Output: false (invalid hours)
console.log(isValidTime24HourFormat("12:60"));  // Output: false (invalid minutes)
console.log(isValidTime24HourFormat("3:5"));    // Output: false (time should be in HH:mm format)
