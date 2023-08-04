// program to find same elements in two different arrays

function findIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersectionArray = findIntersection(array1, array2);
console.log(intersectionArray); // Output: [3, 4, 5]
