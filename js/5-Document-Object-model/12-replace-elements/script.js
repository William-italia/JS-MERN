function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replace Second</li>';
}

function replaceItems() {
    const items = document.querySelectorAll('li');

    items.forEach((item, index) => item.innerHTML = index === 1 ? `Second ${index + 1}` : `cart ${index + 1}`);   
}

function replaceChildHeading() {
    const header = document.querySelector('.list-main-container');
    const h1 = document.getElementById('title');

    const h2 = document.createElement('h2');
    h2.id = 'title';
    h2.textContent = 'Shopping List h2';    

    header.replaceChild(h2, h1);


}

replaceFirstItem();
replaceSecondItem();
replaceItems();
replaceChildHeading();