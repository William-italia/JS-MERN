const form = document.querySelector('.item-form');
const itemInput = document.querySelector('.input-item');
const itemPriority = document.querySelector('#priority-input');
const check = document.getElementById('checkbox');
const title = document.querySelector('h1');


function onInput(e) {
    title.childNodes[1].textContent = e.target.value;
    console.log(title.childNodes);
    
}

const onPriority = (e) => {
    title.childNodes[1].textContent = e.target.value;    
}

const onCheck = (e) => {
    console.log(e.target.checked);


    title.childNodes[1].textContent = e.target.checked === true ? 'Checked' : 'Not checked';
    // if (e.target.checked === true) {
    //     title.childNodes[1].textContent = 'on';   
    // } else {
    //     title.childNodes[1].textContent = 'off';   
    // }
    
}

const onFocus = (e) => {
    console.log('input focus');
    itemInput.style.backgroundColor = 'black';
    itemInput.style.color = 'white';
}
const onBlur = (e) => {
    console.log('input not focus');
    itemInput.style.backgroundColor = 'white';
    itemInput.style.color = 'black';
}



itemInput.addEventListener('input', onInput);
itemPriority.addEventListener('change', onPriority);
check.addEventListener('input', onCheck);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);