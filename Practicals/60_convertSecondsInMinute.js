// Create a function to convert a time in seconds to a formatted string(e.g., "120" returns "2 minutes").

function formatTime(seconds) {
    if (seconds < 60) {
        return `${seconds} second${seconds !== 1 ? 's' : ''}`;
    } else {
        const minutes = Math.floor(seconds / 60);
        return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
}

// Example usage:
console.log(formatTime(120)); // Output: "2 minutes"
console.log(formatTime(45));  // Output: "45 seconds"


