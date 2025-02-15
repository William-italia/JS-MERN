const joke = document.getElementById('joke');


function getJoke() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random1');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const jokes = JSON.parse(this.responseText);
                console.log(jokes);
                joke.textContent = jokes.value;
            } else {
                joke.textContent = 'Algo deu errado! (Nada engraçado)';
            }
        } 
    }

    xhr.send();

}

// function getJoke1() {

//     const xhr1 = new XMLHttpRequest();

//     xhr1.open('GET', 'https://api.chucknorris.io/jokes/random');

//     xhr1.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//                 const jokes = JSON.parse(this.responseText);
//                 console.log(jokes);
//                 joke.textContent = jokes.value;
//         } else {
//             joke.textContent = 'Algo deu errado! (Nada engraçado)';
//         } 
//         } 

//         xhr1.send();
//     }





document.getElementById('New').addEventListener('click', getJoke1);
document.addEventListener('DOMContentLoaded', getJoke1);