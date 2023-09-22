// Check if a given string is an IPv4 address.

function isIPv4Address(input) {
    // Regular expression for matching IPv4 addresses
    const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    // Use the test method of the regular expression to check if the input matches the pattern
    return ipv4Pattern.test(input);
}

// Example usage:
const ipAddress1 = "192.168.0.1";
const ipAddress2 = "256.0.0.1";
console.log(isIPv4Address(ipAddress1)); // Output: true (valid IPv4 address)
console.log(isIPv4Address(ipAddress2)); // Output: false (not a valid IPv4 address)
