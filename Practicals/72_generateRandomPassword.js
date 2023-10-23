// Create a function to generate a random password with uppercase, lowercase, and special characters.

function generateRandomPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const specialChars = '!@#$%^&*()_-+=<>?';

    const allChars = uppercaseChars + lowercaseChars + specialChars;
    const passwordArray = [];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        const randomChar = allChars[randomIndex];
        passwordArray.push(randomChar);
    }

    return passwordArray.join('');
}

// Example usage to generate a random password with a length of 12 characters
const password = generateRandomPassword(12);
console.log(password);

