// Mouse Events



// const onClick = () => {

//     const bgColor = getComputedStyle(document.body).backgroundColor;

//     if(bgColor !== 'rgb(22, 22, 29)') {
//         document.body.style.backgroundColor = '#16161d';
//         document.body.style.color = '#fff';
//         button.style.color = '#fff';
//         buttonRI.forEach(item => item.style.backgroundColor = '#16161d');
//         filter.style.color = '#fff';
//     } else {
//         document.body.style.backgroundColor = '#c5b5ff';
//         document.body.style.color = '#333';
//         button.style.color = '#333';
//         filter.style.color = '#333';
//         filter.style.borderBottom = '1px solid #000';
//         button.style.borderColor = '#000';
//         buttonRI.forEach(item => {
//             item.style.backgroundColor = '#c5b5ff'; 
//             item.closest('li').style.borderColor = '#000';
//         });

//     }
// };

const toggle = document.getElementById('toggleBtn');
const body = document.body;
const clear = document.querySelector('.clear');

const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

const onClick = () => {
    body.classList.add('dark');

    if(body.classList.contains('dark') ) {
        moon.style.display = 'none';
        sun.style.display = 'block';
    } else {
        moon.style.display = 'block';
        sun.style.display = 'none';
    }
};
const onClickRemove = () => {
    body.classList.remove('dark');

    if(body.classList.contains('dark') ) {
        moon.style.display = 'none';
        sun.style.display = 'block';
    } else {
        moon.style.display = 'block';
        sun.style.display = 'none';
    }
};

const onDubleClick = () => console.log('DubleClick Event');


const onRightClick = () => {
    body.classList.toggle('context-menu');
};


// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    toggle.addEventListener('mouseover', onClick);
    toggle.addEventListener('mouseout', onClickRemove);
})


const onMouseDown = () => {
    body.classList.add('context-menu');
}

const onMouseUp = () => {
    body.classList.remove('context-menu');
}

const logo = document.getElementById('logo');

const onMouseWheel = () => console.log('wheel');
const onMouseOver = () => { logo.style.color = 'pink'};
const onMouseOut = () => { logo.style.color = ''};
const onDragStart = () => {console.log('drag start')};
const onDrag = () => {console.log('drag ')};
const onDragEnd = () => {console.log('drag end')};


logo.addEventListener('dblclick', onDubleClick);
window.addEventListener('contextmenu', onRightClick);
window.addEventListener('mousedown', onMouseDown);
window.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);