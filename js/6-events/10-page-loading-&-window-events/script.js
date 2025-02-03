window.addEventListener('DOMContentLoaded', () => {
    
});

window.addEventListener('load', () => {

})

window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resized to W: ${window.innerWidth} H: ${window.innerHeight}`;
});

window.addEventListener('scroll', () => {
    const body = document.body;

    console.log(window.scrollY);
    window.scrollY >= 60 ? body.style.backgroundColor = 'red' : body.style.backgroundColor = 'white';
});

const body = document.body;

window.addEventListener('focus', () => {

    body.style.backgroundColor = 'red';
});

window.addEventListener('blur', () => {
    body.style.backgroundColor = 'white';
})