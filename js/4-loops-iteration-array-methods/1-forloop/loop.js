// for (let i = 1; i <= 10; i++) {
//     if (i === 7) {
//         continue;
//     } else if (i === 10) {
//         console.log('Ten');
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 0; i <= 10; i++) {
    
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log('\n');
// }

const names = ['Vanessa', 'William', 'Livia', 'Elisabeth', 'Marcelo', 'Felipe', 'Vanessa Tia', 'Alice'];

for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Livia') {
        let name = names[i];
        console.log(`${name} é o(a) melhor!`);
    } else if (i === 1) {
        console.log(names[i] + ' é o melhor!');
    } else {
        console.log(names[i]);
    }
}
