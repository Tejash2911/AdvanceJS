// program to remove duplicates from array
const originalArray = [1, 2, 2, 3, 4, 5, 6, 7, 5, 8];

// method 1 using set
function removeDuplicates(array) {
    return [...new Set(array)];
}

const uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray);

// method 2 using filter
function removeDuplicates2(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

const uniqueArray2 = removeDuplicates2(originalArray);
console.log(uniqueArray2);

// method 3 using for loop
function removeDuplicates3(array) {
    const uniqueArray3 = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueArray3.indexOf(array[i]) === -1) {
            uniqueArray3.push(array[i]);
        }
    }
    return uniqueArray3;
}

const uniqueArray3 = removeDuplicates3(originalArray);
console.log(uniqueArray3);