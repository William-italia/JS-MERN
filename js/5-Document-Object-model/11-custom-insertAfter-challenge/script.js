function insertAfter(el, refEl) {
    if (refEl.nextSibling) {
        const nextSib = refEl.nextSibling;

        const pai = refEl.parentElement;

        pai.insertBefore(el, nextSib);
        return;
    }

    refEl.parentElement.appendChild(el);
};

function insertAfter(el, refEl) {
    if (refEl.nextSibling) {
        refEl.parentElement.insertBefore(el, refEl.nextSibling);
        return
    }

    refEl.parentElement.appendChild(el);
};

const li = document.createElement('li');
const thirdItem = document.querySelector('li:nth-child(2)');

li.textContent = 'orange juice';


insertAfter(li, thirdItem);