// program to sort an array of objects based on a specific property.

const people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    // ... other objects
];

// Sort the array based on the "age" property
people.sort((a, b) => a.age - b.age);

console.log(people);
