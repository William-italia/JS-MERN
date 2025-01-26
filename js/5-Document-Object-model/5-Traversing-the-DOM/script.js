// get child elements
let output;

const parent = document.querySelector('.parent');

// parentArr = Array.from(parent.children);

// parentArr.forEach(element => {
//     console.log(element);
// });


output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.borderRadius = '5px';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';
parent.firstChild.textContent = 'child text';


// get parent element from a child element

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid lightgray';
child.parentElement.style.padding = '10px';
child.parentElement.style.borderRadius = '5px'

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
const firstItem = secondItem.previousElementSibling.style.color = 'blue';
const thirdItem = secondItem.nextElementSibling.style.color = 'green';
output = thirdItem;

console.log(output);
