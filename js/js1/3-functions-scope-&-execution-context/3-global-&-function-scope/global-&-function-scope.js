// alert('Hello');
// alert(window.innerWidth);

const x = 100;

console.log(x, 'In global');


function run() {

    console.log(window.innerHeight);
    console.log(x, 'in function');
}

run();

if(true) {
    console.log(x, 'In block');
}

function add() {
    const x = 1
    const y = 50;
    console.log(x + y);
}

// console.log(y);


add();