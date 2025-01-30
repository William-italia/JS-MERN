// Mouse Events

const button = document.querySelector('.clear');
const buttonRI = document.querySelectorAll('.remove-item');

const onClick = () => {
    document.body.style.backgroundColor = '#16161d';
    document.body.style.color = '#fff';
    button.style.color = '#fff';
    buttonRI.forEach(item => item.style.backgroundColor = '#16161d');
};
// const onDubleClick = () => console.log('DubleClick Event');




// Event listeners
button.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDubleClick);