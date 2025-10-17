const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 55];

// const sum = numbers.reduce((acc, curr) => acc + curr, 0)

// console.log(sum); // 55

// let sum2 = 0;

// numbers.forEach((num) => {
//     sum2 += num;
// });

// console.log(sum2); // 55


const sum3 = (num) => {
    let acc = 0;

    for (let i = 0; i < num.length; i++) {
       acc += num[i];
    }

    return acc;
}

const sum4 = () => {
    let acc = 0;

    // for (const curr of numbers) {
    //     acc += curr;
    // }
    for (const curr of numbers) {
        acc += curr;
    }

    return acc;
}

// console.log(sum4(numbers));


const cart = [
    { id: 1, name: 'product 1', price: 130 },
    { id: 2, name: 'product 2', price: 200 },
    { id: 3, name: 'product 3', price: 150 },
    { id: 4, name: 'product 4', price: 300 },
    { id: 5, name: 'product 5', price: 250 }
];

// const sum5 = () => {

//     let acc = 0;

//     // for (const [key, value] of Object.entries(cart)) {
//     //     console.log(key, value);
//     //     acc = acc + value.price;
//     // }
//     for (const curr of cart) {
//         acc += curr.price;
//         console.log(`${curr.name}: $${curr.price}`);
        
//     }

//     return acc;
// }


const sum6 = cart.reduce((acc, curr) => {

    console.log(`${curr.name}: $${curr.price}`);
    
    return acc + curr.price
}, 0);

console.log(`The Total is: $${sum6}`); // 1030
