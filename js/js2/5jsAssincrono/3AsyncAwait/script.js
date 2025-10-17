function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') return reject('BAD VALUE (cai no erro)');

            return resolve(msg);
        }, time);
    })
} 

// esperaAi('Fase 1', rand())
//     .then(data => {
//         console.log(data)
//         return esperaAi('Fase 2', rand());
//     })
//     .then(data => {
//         console.log(data);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(data => {
//         console.log(data);
//         return data;
//     })
//     .then(fase => {
//         console.log('Terminamos na ', fase);
//     })
//     .catch(e => console.error(e));

async function executa() {

    try {

        const fase1 = await esperaAi('Fase1', rand());
        console.log(fase1);

        const fase2 = await esperaAi(123, rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase3', rand());
        console.log(fase3);

        console.log('Terminamos na ', fase3);

    } catch (error) {
        console.log(error);
    }
}

executa();