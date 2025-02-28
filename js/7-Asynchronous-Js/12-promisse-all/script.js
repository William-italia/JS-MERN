function getData(endpoint) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', endpoint);
    
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('erro');
                }
            } 
        };
    
        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 10000) + 1000) 
    });
} 

 const moviesPromise = getData('./movies.json');
 const actorsPromise = getData('./actors.json');
 const directorsPromise = getData('./directors.json');

//  moviesPromise.then((m) => console.log(m));
//  actorsPromise.then((a) => console.log(a));
//  directorsPromise.then((d) => console.log(d));

const dummyPromise = new Promise((resolve, reject) => {
    resolve('Hello World!');
});

 Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
    .then((data) => {console.log(data)})
    .catch((error) => console.log(error))