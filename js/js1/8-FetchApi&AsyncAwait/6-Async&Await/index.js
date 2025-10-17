// const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     resolve({name: 'william', age: 20});
//    }, 1000); 
// });

// // promise.then(data => console.log(data));

// async function getPromise() {
//     const response = await promise;

//     console.log(response);
// }

// // getPromise();


// async function  getUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = res.json();

//     console.log(data);
// }

// // getUsers();

// const getPosts = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
//     const data = res.json();

//     console.log(data);
// }

// getPosts();


function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esparaAi(msg, temp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg);
        }, temp);
    });
}

const exec = async () => {
    try {
        const fase1 = await esparaAi('Fase 1', rand());
        console.log(fase1);
    
        const fase2 = await esparaAi('Fase 2', rand());
        console.log(fase2);
    
        const fase3 = await esparaAi('Fase 3', rand());
        console.log(fase3);
    } catch(e) {
        console.log(e);
    }
   

    console.log('Terminamos na fase: ' + fase3);
}

exec();