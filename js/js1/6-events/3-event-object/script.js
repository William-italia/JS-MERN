const logo = document.querySelector('.logo');


function onClick(e) {
    // console.log(e.target);
    // console.log(e.currentTarget);
    // e.target.style.color = 'pink';
    // console.log(e.type);
    // console.log(e.timeStamp);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    console.log(e.screenX);
    console.log(e.screenY); 
    
};

function onDrag(e) {
    document.querySelector('button').textContent = `X ${e.clientX}, Y ${e.clientY}`;
}

logo.addEventListener('drag', onDrag);

logo.addEventListener('click', onClick)

/*
target - The element that triggered the event
currentTarget - The element that the event listener is attached to (These are the same in this case)
type - the type of event that was triggered
timeStamp - the time that the event was triggered
clientX - the X position of the mouse click relative to the window
clientY - the Y position of the mouse click relative to the window
offsetX - the X position of the mouse click relative to the element
offsetY - the Y position of the mouse click relative to the element
pageX - the X position of the mouse click relative to the page
pageY  - the Y position of the mouse click relative to the page
screenX - the x position of the mouse click relative to the screen
screenY - the Y position of the mouse click relative to the screen
*/ 

const link = document.querySelector('.link');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('Link was clicked: ' + link.href);
    
});

let isDrawing = false;

document.addEventListener('mousedown', () => {
    isDrawing = true;
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

document.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;


    if (e.clientX < 0 || e.clientY < 0 || 
        e.clientX > window.innerWidth - 5 || 
        e.clientY > window.innerHeight - 5) return;
        
    let dot = document.createElement('div');
    dot.style.position = 'absolute';
    dot.style.height = '10px';
    dot.style.width = '10px';
    dot.style.borderRadius = '50%';
    dot.style.backgroundColor = 'red';
    dot.style.top = `${e.clientY}px`;
    dot.style.left = `${e.clientX}px`;
    document.body.appendChild(dot);
});
