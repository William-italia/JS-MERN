const filter = document.getElementById('filter');
const list = document.getElementById('list');
const items = list.getElementsByTagName('li');
const icons = list.querySelectorAll('li i');
const amount = document.querySelector('.amount');


console.log(icons);


list.addEventListener('click', (e) => {
    // if(e.target && e.target)
    console.log(e.target);

    if(e.target && e.target.closest('div').classList.contains('box-heart')) 
    {

        if(e.target.tagName === 'I') {

            e.target.classList.toggle('love');

            if(e.target.classList.contains('love')) {
                e.target.classList = 'fa-solid fa-heart love';

                const li = e.target.closest('li');
                list.prepend(li);
                
            } else {
                e.target.classList = 'fa-regular fa-heart';

                const li = e.target.closest('li');

                let count = 0;
                Array.from(icons).forEach(i => {
                    if(i.classList.contains('love')) {
                        count++;
                    }
                });

                if(count > 0) {
                    list.appendChild(li);  
                }
        
            }
        }

    }
    
});

// filter.addEventListener('input', (e) => {
//     const filterText= filter.value.trim(' ').toLowerCase();

//     Array.from(items).forEach(item => {
//         const itemText = item.textContent.toLocaleLowerCase();
//         amount.innerHTML = `${items.length} Videos`;
        
//         if(itemText.includes(filterText)) {
//             item.style.display = 'flex';
//         } else {
//             item.style.display = 'none';
//         }
//     });

//     verifiedAmountVideos()
// });

filter.addEventListener('input', () => {
    const filterText = filter.value.trim().toLowerCase();

    Array.from(items).forEach(item => {
        const titleElement = item.querySelector('.link-title');
        const itemText = titleElement ? titleElement.textContent.trim().toLowerCase() : '';
        
        
        if (itemText.includes(filterText)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });

    verifiedAmountVideos();
});


function verifiedAmountVideos() {
    const visibleCount = Array.from(items).filter(item => item.style.display != 'none').length;

    amount.innerHTML = `${visibleCount} ${visibleCount == 1 ? 'Video' : 'Videos'}`;
}

verifiedAmountVideos()