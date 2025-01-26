let output;

const parent = document.querySelector('.parent');

const texts = Array.from(parent.childNodes);

output = parent.childNodes;
output = parent.childNodes[1].textContent;
output = parent.childNodes[1].nodeName;
output = parent.childNodes[3].textContent
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[1].innerText = 'Banana Pancake';
output = parent.childNodes[1].style.color = '#ffcc00';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

texts.forEach(item => {
    console.log(item.textContent);
});

// Parent node

const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.border = '1px solid lightgray';
child.parentNode.style.padding = '10px';


// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');


output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
