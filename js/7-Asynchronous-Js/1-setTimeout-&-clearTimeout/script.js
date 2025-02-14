// setTimeout(changeText, 2000);

// console.log('Hello from global scope');

function changeText() {
    const h1 = document.querySelector('h1');

    h1.textContent = 'Foda-se';
    h1.style.fontSize = '30rem';
    
}

const btn = document.getElementById('btn');

const timerId = setTimeout(changeText, 3000);

btn.addEventListener('click', () => {
    clearTimeout(timerId);
});

