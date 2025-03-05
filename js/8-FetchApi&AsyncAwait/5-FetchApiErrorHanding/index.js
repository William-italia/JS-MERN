// fetch('https://httpstat.us/200')
//     .then(res => res)
//     .then(() => console.log('success'));


// Catch runs on a network error
// fetch('https://httpstat.us/404 ')
//     .then(res => res)
//     .then(() => console.log('success'))
//     .catch((error) => {
//         console.log('Erro: ' + error);
//     })

// test with res.ok
// fetch('https://httpstat.us/404 ')
//     .then(res => {
//         console.log(res.status);
//         if(!res.ok) {
//             throw new Error('Request Failed!');
//         }
        
//         return res;
//     })
//     .then(() => console.log('success'))
//     .catch((error) => {
//         console.log('Erro: ' + error);
//     })



fetch('https://httpstat.us/200')
    .then(res => {
        console.log(res.status);

        if(res.status === 404) {
            throw new Error('Not Found');
        } else if(res.status === 500) {
            throw new Error('Server Error');
        } else if(res.status !== 200) {
            throw new Error('Request Failed');
        }


        return res;
    })
    .then(() => console.log('success'))
    .catch((error) => {
        console.log('Erro: ' + error);
    })