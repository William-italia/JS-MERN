console.log(window.document);
console.log(document.body.innerText);
console.log(document.links[0]);

// document.body.innerHTML = '<h1>Hello World!</h1>';

// document.write('Hello World!');

console.log(document.getElementById('main'));
const main = document.getElementById('main');

main.innerHTML = '<h1>Hello from main!</h1>';

document.querySelector('#main h1').style.color = 'red';