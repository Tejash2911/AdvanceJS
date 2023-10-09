//  Check if a number is a power of two.

function isPowerOfTwo(number) {
    // Check if the number is positive and has exactly one bit set to 1
    return number > 0 && (number & (number - 1)) === 0;
}

// Example usage:
console.log(isPowerOfTwo(4));   // Output: true (4 is 2^2)
console.log(isPowerOfTwo(16));  // Output: true (16 is 2^4)
console.log(isPowerOfTwo(3));   // Output: false (3 is not a power of 2)
console.log(isPowerOfTwo(-8));  // Output: false (-8 is not a power of 2)
