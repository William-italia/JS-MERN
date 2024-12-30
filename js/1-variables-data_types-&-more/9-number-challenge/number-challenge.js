
// console.log(differenceOutput); // 31 - 15 = 16
// console.log(productOutput); // 31 * 15 = 465
// console.log(quotientOutput); // 31 / 15 = 2.066666666666667
// console.log(rmOutput); // 31 % 15 = 1

x = Math.round(Math.random() * 100 + 1);
y = Math.round(Math.random() * 50 + 1);


// sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput); 

// difference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;
console.log(differenceOutput); 

// product
const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;
console.log(productOutput); 

// quotient
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput); 

// rm
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput); 

