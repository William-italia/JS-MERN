function removeItem(itemNumber) {
    const items = document.querySelectorAll('li');

    items[itemNumber -1].remove();
}

function removeItemChild(itemNumber) {

    const list = document.querySelector('ul');
    const item = document.querySelector(`li:nth-child(${itemNumber})`);

    list.removeChild(item);
}

removeItem(3);
removeItemChild(1);

// .toggle