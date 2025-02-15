const list = document.querySelector('#results');
const xhr = new XMLHttpRequest();

// xhr.open('GET', './movies.json');

// xhr.onreadystatechange = function () {
//     console.log(this.readyState);  
//     if(this.readyState === 4 && this.status === 200) {
//         // console.log(JSON.parse(this.responseText));
//         const data = JSON.parse(this.responseText);

//         data.forEach(movie => {
//             const li = document.createElement('LI');
//             li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
//             list.appendChild(li);
//         });
//     }
// };

// xhr.send();


// xhr.open('GET', 'https://api.github.com/users/craftzdog');
xhr.open('GET', 'https://api.github.com/users/william-italia');

xhr.onreadystatechange = function () {
    // console.log(this.responseText);  
    if(this.readyState === 4 && this.status === 200) {
        // console.log(JSON.parse(this.responseText));
        const data = JSON.parse(this.responseText);

        document.querySelector('img').src = data.avatar_url;
        const h1 = document.createElement('h1');
        h1.textContent = data.name;
        document.querySelector('li').appendChild(h1);

        const xhrRepos = new XMLHttpRequest();
        xhrRepos.open('GET', "https://api.github.com/users/William-italia/repos");

        xhrRepos.onreadystatechange = function () {
            if(this.readyState === 4 && this.status === 200) {
                const repos = JSON.parse(this.responseText);
                console.log(repos);
                

                repos.forEach(repo => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${repo.name}</strong> - Language: ${repo.language}`;
                    document.querySelector('li').appendChild(li);
                });
              
            }
        }
        // data.forEach(user => {
        //     const li = document.createElement('LI');
        //     li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
        //     list.appendChild(li);
        // });
        xhrRepos.send();        
    }
};

xhr.send();