// program to find the longest common prefix of an array of strings

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }

    // Sort the strings to make comparing easier (lexicographic order)
    strs.sort();

    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];
    let commonPrefix = "";

    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr.charAt(i) === lastStr.charAt(i)) {
            commonPrefix += firstStr.charAt(i);
        } else {
            break;
        }
    }

    return commonPrefix;
}

// Example usage:
const strings = ["flower", "flour", "flourish"];
const prefix = longestCommonPrefix(strings);
console.log(prefix); // Output: "flo"
