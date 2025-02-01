const filter = document.getElementById('filter');
const list = document.getElementById('list');
const items = list.getElementsByTagName('li');
const amount = document.querySelector('.amount');

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