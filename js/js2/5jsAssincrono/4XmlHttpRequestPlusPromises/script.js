// const ajax = obj => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             obj.success(xhr.responseText);
//             return;
//         }

//         obj.error(xhr.statusText);
//         return
//     });
// }

// document.addEventListener('click', (e) => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();
//     if (tag === 'a') {
//         e.preventDefault();
//         carregaPagina(el);
//     }
// });

// const result = document.querySelector('.result');

// function carregaPagina(el) {
//     const href = el.getAttribute('href');
//     console.log(href);

//     ajax({
//         method: 'GET',
//         url: href,
//         success(response) {
//             console.log('Deu bom meno: ', response);
//             result.innerHTML = response;
//         }, 
//         error(error) {
//             console.log('Deu merda meno: ', error);
//         }
//     });
// }
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
                return;
            }

            reject(xhr.statusText);
        });
    })

}

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el).catch(e => console.error('Erro ao carregar conteudo para pagina: ', e));
    }
});


async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    }

    try {
        const content = await request(objConfig);
        carregaResultado(content);
    } catch (error) {
        console.error('trycatch error: ', error);
    }
}

function carregaResultado(data) {
    const result = document.querySelector('.result');
    result.innerHTML = data;
}
    
