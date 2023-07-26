let str = "Tejash";

// First Method

let str2 = str.split("").reverse().join("");

console.log(str2);

// Second Method - Using For Loop

let str3 = "";

for (let i = 1; i <= str.length; i++) {
    str3 += str[str.length - i];
}

console.log(str3);