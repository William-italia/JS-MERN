document.addEventListener('DOMContentLoaded', () => {
    const lista = document.querySelector('ul');
    const form = document.getElementById('item-form');
    const inputItem = document.querySelector('.input-item');
    const msg = document.querySelector('.msg');
    const clear = document.querySelector('.clear');

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

            msg.innerText = '';
            createMsg('Item adicionado com sucesso!', 'ok');
            msg.classList.add('active');

            lista.prepend(CreateItem(item));
            inputItem.value = '';

            inputItem.focus();
            
            toogleClearButton();

            setTimeout(() => {
                msg.classList.remove('active');
                msg.classList.add('disable');
                msg.classList.remove('ok');

                msg.innerText = '';
            }, 2000); 
            
        } else {

            msg.innerText = '';
            createMsg('Entre com um item, para adicionar algo a lista!', 'erro')
            msg.classList.add('active');
            
            setTimeout(() => {
                msg.classList.remove('active');
                msg.classList.remove('erro');
                msg.classList.add('disable');   
                msg.innerText = '';
            }, 2000);
        }
    });

    function createMsg(text, status) {
        msg.appendChild(CreateText(text));
        msg.classList.add(status);

        return msg;
    }

    lista.addEventListener('click', (e) => {
        if(e.target && e.target.closest('button')) {
            const item = e.target.closest('button');        
            item.closest('li').remove();

            toogleClearButton();

            msg.innerText = '';
            createMsg('Item apagado com sucesso!', 'remove')
            msg.classList.add('active');
            
            setTimeout(() => {
                msg.classList.remove('active');
                msg.classList.remove('remove');
                msg.classList.add('disable');   
                msg.innerText = '';
            }, 2000);
        }
    });

    function clearALL() {
        lista.innerHTML = '';
        toogleClearButton();

        msg.innerText = '';
        createMsg('Todos os items apagados com sucesso', 'clear')
        msg.classList.add('active');
        
        setTimeout(() => {
            msg.classList.remove('active');
            msg.classList.remove('clear');
            msg.classList.add('disable');   
            msg.innerText = '';
        }, 2000);
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
