// program to create deep copy of object

function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof Array) {
        const copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i]);
        }
        return copy;
    }

    if (obj instanceof Object) {
        const copy = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepCopy(obj[key]);
            }
        }
        return copy;
    }
}

// Example usage:
const originalObject = {
    name: "John",
    age: 30,
    nested: {
        prop1: "value1",
        prop2: "value2"
    }
};

const copiedObject = deepCopy(originalObject);
console.log(copiedObject);
