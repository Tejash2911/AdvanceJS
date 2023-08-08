// program to sum all even numbers in array

function sumOfEvenNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenSum = sumOfEvenNumbers(numbers);
console.log(evenSum); // Output: 20 (2 + 4 + 6 + 8)
