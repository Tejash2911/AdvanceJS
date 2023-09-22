// Implement a function to find the most frequent element in an array

function findMostFrequentElement(arr) {
    // Create an object to store element frequencies
    const frequencyMap = {};

    // Iterate through the array and count the frequencies
    for (const element of arr) {
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
    }

    let mostFrequentElement = null;
    let highestFrequency = 0;

    // Iterate through the frequency map to find the most frequent element
    for (const element in frequencyMap) {
        if (frequencyMap[element] > highestFrequency) {
            highestFrequency = frequencyMap[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

// Example usage:
const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const mostFrequent = findMostFrequentElement(numbers);
console.log(mostFrequent); // Output: 4 (4 is the most frequent element)
