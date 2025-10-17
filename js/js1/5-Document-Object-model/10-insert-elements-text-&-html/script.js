// insertAdjacentElement Example
function insertElement() {
    const filter = document.querySelector('.filter-container');

    const h1 = document.createElement('h1');    
    h1.textContent = 'insert Element';

    // filter.insertAdjacentElement('beforebegin', h1);
    filter.insertAdjacentElement('afterbegin', h1);
}


insertElement();

// insertAdjacentText Example
function insertText() {
    const title = document.getElementById('title');

    title.insertAdjacentText('afterend', 'banana');
}

insertText();

// insertAdjacentHTML Example
function insertHTML() {
    const item = document.querySelector('li:first-child');

    item.insertAdjacentHTML('beforeend', '<p>i love my mom</p>');
    console.log(item);
    
}

insertHTML();

// insertBefore Example
function insertBeforee(item) {
    const list = document.querySelector('ul');
    const li = document.createElement('li');
    const thirdItem = document.querySelector('li:nth-child(4)');

    li.textContent = item;

    
    list.insertBefore(li, thirdItem);


}

insertBeforee('banana');