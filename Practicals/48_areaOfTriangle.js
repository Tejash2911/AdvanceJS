// Implement a function to calculate the area of a triangle given its three sides.

function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter (s)
    const s = (a + b + c) / 2;

    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

// Example usage:
const sideA = 3;
const sideB = 4;
const sideC = 5;

const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
console.log(triangleArea); // Output: 6 (Area of a 3-4-5 right triangle)
