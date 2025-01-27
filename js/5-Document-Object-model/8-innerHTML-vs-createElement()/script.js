const lista = document.querySelector('ul');

// Quick & Dirty
function createListItem(item) {
    const li = document.createElement('li');
    const lista = document.querySelector('ul');

    li.innerHTML = `${item} <button class="remove-item"><i class="fa-solid fa-xmark"></i></button>`;
    return lista.appendChild(li);
}


// Clean & performant
function createNewItem(item) {
        
    const li = document.createElement('li');
    const button = document.createElement('button');
    const i = document.createElement('i');
    const text = document.createTextNode(item);

    li.appendChild(text);
    button.className = 'remove-item';
    i.className = 'fa-solid fa-xmark';

    button.appendChild(i);

    li.appendChild(button);

    return lista.prepend(li);
}


createListItem('Eggs');
createNewItem('Ovos');