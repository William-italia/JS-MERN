let x;

// array literal
const numbers = [12, 45, 33, 29, 39, 102];

// array constructor
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[0]}`;

x = numbers.length;

fruits[2] = 'pear';

// fruits.length = 2

fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);
