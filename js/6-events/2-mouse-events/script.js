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

const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

const onClick = () => {
    body.classList.toggle('dark');

    if(body.classList.contains('dark') ) {
        moon.style.display = 'none';
        sun.style.display = 'block';
    } else {
        moon.style.display = 'block';
        sun.style.display = 'none';
    }
};

// const onDubleClick = () => console.log('DubleClick Event');




// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    toggle.addEventListener('click', onClick);
})
// logo.addEventListener('dblclick', onDubleClick);