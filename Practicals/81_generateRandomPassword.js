// Create a function to generate a random password with a specified length and characters.

function generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let allowedChars = '';

    if (includeUppercase) {
        allowedChars += uppercaseChars;
    }
    if (includeLowercase) {
        allowedChars += lowercaseChars;
    }
    if (includeNumbers) {
        allowedChars += numberChars;
    }
    if (includeSpecialChars) {
        allowedChars += specialChars;
    }

    if (allowedChars === '') {
        return 'Invalid character set';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars.charAt(randomIndex);
    }

    return password;
}

// Example usage:
const password = generateRandomPassword(12, true, true, true, true);
console.log(password);

