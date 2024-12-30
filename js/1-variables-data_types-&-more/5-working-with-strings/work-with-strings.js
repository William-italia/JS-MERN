let x;

const name = 'William';
const age = 20;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old'

// template Literals
x = `Hello, My name is ${name} and I am ${age} yerars old`;


//  string properties and methods
// const s = 'Hello World';
const s = new String('Hello World');

x = typeof s;

x = s.length;

// access values by key
x = s[10];

x = s .__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('d');

x = s.substring(0, 5);
x = s.substring(5);
x = s.slice(-11, -6);

const text = 'Hello-World';
x = s.trim();
x = s.replace('World', 'potato');
x = x.includes('potato');

x = s.valueOf();


const words = text.split('-');
// const invalidString = '\uD800';

// x = invalidString;

// console.log(invalidString.toWellFormed());
// console.log(x);
// console.log(words);

const text1 = "apple, banana, cherry";
const withOutBanana = text1.split(', ').filter(fruit => fruit !== "banana").join(", ");



console.log(withOutBanana);
