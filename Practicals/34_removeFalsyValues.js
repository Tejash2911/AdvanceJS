//  Remove all falsy values (false, null, 0, "", undefined, NaN) from an array

function removeFalsyValues(arr) {
    return arr.filter(item => !!item); // Use !! to coerce items to boolean
}

// Example usage:
const originalArray = [false, null, 0, "", undefined, NaN, "Hello", 42];
const filteredArray = removeFalsyValues(originalArray);
console.log(filteredArray); // Output: ["Hello", 42]
