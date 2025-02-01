document.addEventListener('DOMContentLoaded', () => {
    const lista = document.querySelector('ul');
    const form = document.getElementById('item-form');
    const inputItem = document.querySelector('.input-item');
    const msg = document.querySelector('.msg');
    const clear = document.querySelector('.clear');

    let timeOutId;

    function CreateText(item) {
        const text = document.createTextNode(item);
        return text;
    } 

    function CreateItem(item) {

        const li = document.createElement('li');
        const button = document.createElement('button');
        
        button.className = 'remove-item';

        button.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        li.appendChild(CreateText(item));
        li.appendChild(button);

        return li;
    }

    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const item = inputItem.value;

        if(item.trim() != '') {

            showMsg('Item adicionado com sucesso!', 'ok');

            lista.prepend(CreateItem(item));
            inputItem.value = '';

            inputItem.focus();
            
            toogleClearButton(); 

        }  else {
            showMsg('Entre com um item, para adicionar algo a lista!', 'erro');
        }
    });

    function showMsg(text, type) {
        const msg = document.querySelector('.msg');

        msg.textContent = text;
        msg.classList.add(type);

        msg.classList.add('active');

        if(timeOutId) {
            clearTimeout(timeOutId);
        }

        timeOutId = setTimeout(() => {
            msg.classList.remove('active');
            setTimeout(() => {
                msg.classList.remove(type);
            }, 500);
        }, 2000);
    }

    lista.addEventListener('click', (e) => {
        if(e.target && e.target.closest('button')) {
            
            const item = e.target.closest('button');        
            item.closest('li').remove();

            toogleClearButton();

            showMsg('Item apagado com sucesso!', 'remove')
        }
    });

    function clearALL() {
        lista.innerHTML = '';
        toogleClearButton();

        showMsg('Todos os items apagados com sucesso', 'clear')
    }

    clear.addEventListener('click', clearALL)

    function toogleClearButton() {
        if (lista.children.length > 1) {
            clear.style.display = 'block';
        } else {
            clear.style.display = 'none';
        }
    }

    toogleClearButton(); 
});



// div.className = 'my-element';
// div.id = 'my-element';
// // button.setAttribute('type', 'submit');
// button.className = 'remove-item'
// button.innerHTML =  '<i class="fa-solid fa-xmark"></i>';
// // div.innerText = 'hello world!';

// const text = document.createTextNode('Orange Juice');



// li.appendChild(text);
// li.appendChild(button);

// list.prepend(li);


// console.log(li.outerHTML);;
