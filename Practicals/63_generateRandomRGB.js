// Create a function to generate a random color in RGB format.

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);      // Random value between 0 and 255 for red
    const green = Math.floor(Math.random() * 256);    // Random value between 0 and 255 for green
    const blue = Math.floor(Math.random() * 256);     // Random value between 0 and 255 for blue

    // Create an RGB string in the format "rgb(r, g, b)"
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    return rgbColor;
}

// Example usage:
const randomColor = generateRandomColor();
console.log(randomColor);  // Output: e.g., "rgb(123, 45, 210)" (a randomly generated RGB color)

