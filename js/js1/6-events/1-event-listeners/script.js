// const clearBtn = document.getElementById('clear');

// function onClear() {
//     console.log('Clear');
// }

// JAVA SCRIPT event listeners



// clearBtn.onclick = function onClear() {
//     confirm('Tem certeza?');
// }

// add Eventa Listener
// clearBtn.addEventListener('click', (e) => {
//     alert('Clear');
// }); 

// clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000)

// setTimeout(() => clearBtn.click(), 5000);

const clearBtn = document.getElementById('clear');
const list = document.querySelector('.list-items');
const items = document.querySelectorAll('.list-items li');
const form = document.getElementById('item-form');
const inputItem = document.querySelector('.input-item');


// clearBtn.addEventListener('click', () => {
//     items.forEach(item => {
//         item.remove();
//     });
// });

// clearBtn.addEventListener('click', () => {
//     list.innerHTML = '';
// });

// clearBtn.addEventListener('click', () => {
//     list.replaceChildren(); esse é mais eficiente e rapido do que zerar o Html
// });

// clearBtn.addEventListener('click', () => {

//     const itemsARR = Array.from(list.childNodes);
//     const itemsList = itemsARR.filter(el => el.nodeName === 'LI'); 
  
//     itemsList.forEach(child => child.remove());

//     verifiedStatusClear();

// });

clearBtn.addEventListener('click', () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
})


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const item = inputItem.value;

    if(item.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${item} <button class="remove-item"><i class="fa-solid fa-xmark"></i></button>`;
        list.prepend(li);

        inputItem.value = '';
        inputItem.focus();

        verifiedStatusClear();
    } else {
        alert('Digite algo!');
    }
});

function removeItem(e) {
    console.log(e.target);
    
    if(e.target && e.target.closest('button').classList.contains('remove-item')) {
       const item = e.target.closest('button');
        item.closest('li').remove();

        verifiedStatusClear();
    
    }
}

list.addEventListener('click', removeItem) 


function verifiedStatusClear() {
  if (list.children.length > 1) {
    clearBtn.style.display = 'block';
  } else {
    clearBtn.style.display = 'none';
  } 
}

verifiedStatusClear();
