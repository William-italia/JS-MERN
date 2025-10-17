const lista = document.querySelector('ul');

function createNewItem(item) {
    
    const button = createButton('remove-item', 'fa-solid fa-xmark');
    const text = createText(item);
    const li = createLi(text, button);

    return lista.prepend(li);
}

function createLi(text, button) {
    const li = document.createElement('li');
    
    li.appendChild(text);
    li.appendChild(button);

    return li;
}

function createButton(classes, i) {
    const button = document.createElement('button');
    button.className = classes;

    if (i) {
        const icon = createIcon(i);
        button.appendChild(icon);
    }

    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;

    return icon;
}

function createText(value) {
    const text = document.createTextNode(value);

    return text;
}


createNewItem('teste');
createNewItem('teste2');
createNewItem('teste2222');
