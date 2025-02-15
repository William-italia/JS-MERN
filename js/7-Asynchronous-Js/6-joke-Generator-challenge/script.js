function getJoke() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const jokes = JSON.parse(this.responseText);
            console.log(jokes);
            const joke = document.getElementById('joke');
            joke.textContent = jokes.value;
        }
    }

    xhr.send();

}

document.getElementById('New').addEventListener('click', getJoke);