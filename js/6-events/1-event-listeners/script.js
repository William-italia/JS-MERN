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

// });

function verifiedStatusClear() {
  if (list.children.length > 1) {
    clearBtn.style.display = 'block';
  } else {
    clearBtn.style.display = 'none';
  } 
}

verifiedStatusClear();
