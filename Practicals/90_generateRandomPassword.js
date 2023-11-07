//  Implement a function to generate a random password with specified requirements(e.g.,     length, uppercase, lowercase, digits, special characters).

function generateRandomPassword(length, useUppercase, useLowercase, useNumbers, useSpecialChars) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';

    let allowedChars = '';

    if (useUppercase) {
        allowedChars += uppercaseChars;
    }
    if (useLowercase) {
        allowedChars += lowercaseChars;
    }
    if (useNumbers) {
        allowedChars += numberChars;
    }
    if (useSpecialChars) {
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
