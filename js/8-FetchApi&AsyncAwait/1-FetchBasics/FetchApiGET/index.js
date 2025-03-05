// const request = obj => {
//     return new Promise((resolve, reject) => {

//         const xhr = new XMLHttpRequest();

//         xhr.open(obj.method, obj.url, true);
//         xhr.send();
    
//         xhr.addEventListener('load', () => {

//             if(xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject({
//                     code: xhr.status,
//                     msg: xhr.statusText
//                 });
//             }

//         });

//     });
// }

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {

    const href = el.getAttribute('href');
    /*
    // request({
    //     method: 'GET',
    //     url: href
    // })
    // .then(res => loadResult(res))
    // .catch(error => console.log(error));
    */

    try {
        const res = await fetch(href);

        if(!res.ok) throw new Error(`Erro: ${res.status} - ${res.statusText}`);
    
        const html = await res.text();
        loadResult(html);    
    } catch(e) {
        console.log(e);
    }
  
}

function loadResult(res) {
    const result = document.querySelector('.result');

    result.innerHTML = res;
}


