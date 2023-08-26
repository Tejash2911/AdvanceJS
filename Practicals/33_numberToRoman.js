//  program to convert a number to Roman numerals

function intToRoman(num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = "";

    for (const symbol in romanNumerals) {
        const value = romanNumerals[symbol];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Example usage:
const number = 3549;
const romanNumeral = intToRoman(number);
console.log(romanNumeral); // Output: "MMMDXLIX" (3549 in Roman numerals)
