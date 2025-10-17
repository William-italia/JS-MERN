const form = document.querySelector('#item-form');

const title = document.querySelector('h1');


// form.addEventListener('submit', (e) => {

//     e.preventDefault();

//     const itemInput = document.querySelector('.input-item').value;
//     const itemPriority = document.querySelector('#priority-input').value;
//     const check = document.getElementById('checkbox').checked;

//     if (itemPriority === '0' || check === false || itemInput === '') {
//         title.childNodes[1].textContent = 'Jato';
//         return;
//     } else {
//         console.log('tudo ok');
//     }

    

// })


function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    console.log(formData);

    // const item = formData.get('item');
    // const prio = formData.get('priority');
    // const check = formData.get('check');

    const entries = formData.entries();

    // console.log(item, prio, check);
    console.log(entries);
    
    for (let entry of entries) {
        console.log(entry);
    }

  
}

form.addEventListener('submit', onSubmit);