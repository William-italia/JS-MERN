// function randTime(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, time) {
//     return new Promise((resolve, reject) => {

//         if(msg === '') reject('Msg vazia');
//         if(typeof msg !== 'string') reject('Tipo de dado invalido');

//         setTimeout(() => {
//             resolve(msg);
//         }, time);
//     });
// }

// esperaAi('text one', randTime(1, 3))
//     .then(res => {
//         console.log(res);
//         return esperaAi('', randTime(1, 2));
//     })
//     .then(res => {
//         console.log(res);
//         return esperaAi('text three', randTime(1, 2));
//     }).then(res => {
//         console.log(res);
//     }).then(() => {
//         console.log('End ');
//     })
//     .catch((error) => {
//         console.log('Erro: ', error);
//     });


// // esperaAi('text two', randTime(1, 3));
// // esperaAi('text three', randTime(1, 3));



// // esperaAi('Text One', randTime(1, 3), function() {
// //     esperaAi('Text two', randTime(1, 3), function() {
// //         esperaAi('Text three', randTime(1, 3));
// //     });
// // });

function getUserGit(username) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => {
            if(!res.ok) {
                reject(`BAD VALUE`);
                return;
            }

            return res.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
}

const nome = document.querySelector('.nome');

getUserGit('william-italia')
.then(user => {
    console.log(user.name);
    nome.innerHTML = user.name;
})
.catch(error => console.error('Error: ', error));

