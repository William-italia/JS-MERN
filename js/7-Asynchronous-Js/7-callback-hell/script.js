function getData(endpoint, cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint, true);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);

           cb(data);
        } 
    }


    setInterval(() => {
        xhr.send();
    }, Math.floor(Math.random() * 10000) + 1000) 
} 

// getData('./actors.json', (data) => {
//     console.log(data);
//     getData('./directors.json', (data) => {
//         console.log(data);
//         getData('./movies.json', (data) => {
//             console.log(data);
//         })
//     })
// });
