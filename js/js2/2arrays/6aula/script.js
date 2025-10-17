const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acc, valor) => acc += valor , 0);
const totalPares = numeros.filter(n => n % 2 !== 0).reduce((acc, valor) => acc += valor ,0);
const dobroNumeros = numeros.map(n => n * 2);

console.log(total);
console.log(totalPares);
console.log(dobroNumeros);
