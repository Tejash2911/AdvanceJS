// input = [2,7,11,4,-2];
// output = [20,15,11,18,24];

// const arr = [2, 7, 11, 4, -2];

// function sumOthers(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let total = arr.reduce((lastEle, ele) => {
//             return lastEle + ele;
//         });
//         newArr.push(total - arr[i]);
//     }
//     console.log(newArr);
// }

// sumOthers(arr);

// -----------------------------------------------------------------

// let input = "aa1234b9"

// let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// function findEle(input) {
//     let temp = []
//     let str = input.split("");
//     for (let i = 0; i < str.length; i++) {
//         if (nums.includes(str[i])) {
//             temp.push(str[i]);
//         }
//     }
//     let ss = temp[1]
//     let sl = temp[temp.length - 2]
//     console.log("Second Smallest Number Is:", ss)
//     console.log("Second Largest Number Is:", sl)

// }

// findEle(input)

// -----------------------------------------------------------------


// function print(obj) {
//     console.log(`You have to live more ${100 - obj.age} to Complete 100 Years`)
// }

// const obj = {
//     name: "tejash",
//     age: 40
// }
// print(obj)

// -----------------------------------------------------------------

// const vowels = ["a", "e", "i", "o", "u"]

// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++
//         }
//     }
//     console.log("the Total Count Of Vowels Is", count);
// }

// const str = "this is the world of javascript"
// countVowels(str)

// -----------------------------------------------------------------

// function findEven(arr) {
//     return arr.filter(e => e % 2 === 0);
// }

// let arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
// let x = findEven(arr);
// console.log(x);