let arr = [10, 50, 200, 100, 75, 180];

// Method 1 Using Math.max()

let maximum = Math.max(...arr);

console.log(maximum);

// Method 2 Using For loop

let maximum2 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maximum2) {
        maximum2 = arr[i];
    }
}

console.log(maximum2);

// Method 3 Using Map Method
let maximum3 = 0;
arr.map((ele, i) => {
    if (ele >= maximum3) {
        maximum3 = ele;
    }
});
console.log(maximum3);


// Method 4 Using Reduce Function

let findMax = arr.reduce((lastEle, ele) => {
    let maximum4 = 0;
    if (lastEle > ele) {
        maximum4 = lastEle;
    } else {
        maximum4 = ele;
    }
    return maximum4;
})

console.log(findMax);
