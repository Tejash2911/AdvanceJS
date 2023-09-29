//  Implement a function to calculate the area of a circle given its radius

function calculateCircleArea(radius) {
    if (radius < 0) {
        return "Radius cannot be negative";
    }

    const area = Math.PI * Math.pow(radius, 2);
    return area;
}

// Example usage:
const radius = 5;
const circleArea = calculateCircleArea(radius);
console.log(circleArea); // Output: 78.53981633974483 (approximately)
