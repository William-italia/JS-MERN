const button = document.querySelector('.add');
const form = document.querySelector('#item-form');
const title = document.querySelector('h1');

button.addEventListener('click', (e) => {
    alert('button clicked')
})

form.addEventListener('click', (e) => {
    alert('form clicked')
})

document.body.addEventListener('click', () => {
    alert('body clicked')
})