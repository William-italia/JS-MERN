let intervalID = false;

document.getElementById('cancel').addEventListener('click', cancel);
document.getElementById('start').addEventListener('click', () => start('1000'));

function start(timer) {
    timer = Number(timer);
    if (!intervalID) {
        intervalID = setInterval(changeColor, timer);
    }
}

function cancel() {
    clearInterval(intervalID);
    intervalID = false;
}

const body = document.body;

function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = `#${randomColor}`;

    // if (body.style.backgroundColor !== 'black') {
    //     body.style.backgroundColor = 'black';
    //     body.style.color = 'white';
    // } else {
    //     body.style.backgroundColor = 'white';
    //     body.style.color = 'black';
    // }
}