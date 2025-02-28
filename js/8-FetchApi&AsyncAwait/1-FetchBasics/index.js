fetch('./movies.json')
.then(res => res.json())
.then((data) => console.log(data))

fetch('https://api.github.com/users/william-italia/repos')
    .then(res => res.json())
    .then(data => {
        data.forEach(repo => {
            console.log(repo.name);
        });
    });

fetch('./text.txt')
    .then(res => res.text())
    .then(data => console.log(data))

fetch('https://api.github.com/users/william-italia')
    .then(res => res.json())
    .then(data => (document.querySelector('h1').textContent = data.login))