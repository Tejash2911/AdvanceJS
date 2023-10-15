// Implement a function to calculate the distance between two points in a 2D plane.

function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Use the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
}

// Example usage:
const point1 = { x: 1, y: 2 };
const point2 = { x: 4, y: 6 };
const distance = calculateDistance(point1.x, point1.y, point2.x, point2.y);
console.log(distance); // Output: 5 (distance between the points (1, 2) and (4, 6))
