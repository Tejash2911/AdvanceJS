// Check if an array of numbers is a consecutive sequence(i.e., each number is one greater than the previous).

function isConsecutiveSequence(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1] - 1) {
            return false;
        }
    }
    return true;
}

// Example usage:
const consecutiveArray = [1, 2, 3, 4, 5];
const nonConsecutiveArray = [1, 2, 4, 5];
console.log(isConsecutiveSequence(consecutiveArray)); // Output: true (consecutive sequence)
console.log(isConsecutiveSequence(nonConsecutiveArray)); // Output: false (non-consecutive sequence)

