function add(a, b) {
    return a + b;
}


// Regular Function Syntax
const add1 = (a, b) => {
    return a + b
};

// implicit return
const subtract = (a, b) => a - b;

// Can Leave off () with a single param
const double = a => a * 2;

// return an Object
const createObject = () => ({
    name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (n) {
//     console.log(n);
// });

// arrow function in a callback
numbers.forEach((n) => {
    console.log(n);
});

console.log(add1(10, 5));
console.log(subtract(10, 5));
console.log(double(2));
console.log(createObject());
