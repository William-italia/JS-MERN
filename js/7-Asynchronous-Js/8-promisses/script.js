// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task complete');
//         resolve();
//     }, 1000);
// });

// promise.then(() => {
//     console.log('Promise consumed');
    
// });

// const getUser = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;

//         if(!error) {
//             resolve({name: 'william', age: 20});
//         } else {
//             reject('Error: something went wrong');
//         }
//     }, 2000);
// })


// getUser
//     .then((user) => console.log(user))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('The promise has been resolver or rejected'));


// console.log('teste');


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task complete');
//         resolve();
//     }, 1000)
// })

// promise.then(() => {
//     console.log('Promise consumed');
// })

// new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Async task complete');
//             resolve();
//         }, 1000);
//     }).then(() => {
//         console.log('promise 2 consumed');
        
//     });


const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if(!error) {
            resolve({name: 'william', age: 20});
        } else {
            reject('Error: something went wrong');
        }

    }, 2000);
}).then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('fim'));
