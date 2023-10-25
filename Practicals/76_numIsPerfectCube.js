// Check if a given number is a perfect cube.

function isPerfectCube(number) {
    const cubeRoot = Math.cbrt(number);
    return Number.isInteger(cubeRoot);
}

// Example usage:
console.log(isPerfectCube(27)); // Output: true (27 is a perfect cube: 3^3)
console.log(isPerfectCube(64)); // Output: true (64 is a perfect cube: 4^3)
console.log(isPerfectCube(10)); // Output: false (10 is not a perfect cube)

