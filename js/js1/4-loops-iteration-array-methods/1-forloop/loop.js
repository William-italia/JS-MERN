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

// foundName = false;

// names.forEach((name, index) => {
//     if (name === 'Livi') {
//         names[index] = 'Livia é a melhor!'; 
//         foundName = true;
//     }
// })

// if (!foundName) {
//     names[1] = 'William é o melhor!';
// }

// names.forEach(name => {
//     console.log(name);
// })


for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Felipe') {
        names[i] = 'Felipe é o melhor';
    } 

    console.log(names[i]);
    
}