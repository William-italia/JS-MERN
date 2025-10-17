 let x;
 
 const fruits = ['apple', 'pear', 'orange'];
 const berries = ['strawberry', 'blueberry', 'rasberry'];

//  fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

x = fruits.concat(berries);

x = [...fruits, ...berries];

// flatten 
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// static methods on array object

x = Array.isArray('hello');

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c)


console.log(x);
 