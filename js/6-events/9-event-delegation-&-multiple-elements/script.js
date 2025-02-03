const list = document.querySelector('.list-items');
const items = document.querySelectorAll('li');


// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log(e.target.remove());     
//     });
// });

list.addEventListener('click', (e) => {
    if(e.target && e.target.closest('button').classList.contains('remove-item')) {

        const listItem = e.target.closest('li');

        listItem ? listItem.remove() : null;


    }
});