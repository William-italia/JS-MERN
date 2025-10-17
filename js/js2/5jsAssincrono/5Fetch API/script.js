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
// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();

//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//                 return;
//             }

//             reject(xhr.statusText);
//         });
//     })
// }

// async function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     const objConfig = {
//         method: 'GET',
//         url: href,
//     }

//     try {
//         const content = await request(objConfig);
//         carregaResultado(content);
//     } catch (error) {
//         console.error('trycatch error: ', error);
//     }
// }

function carregaResultado(data) {
    const result = document.querySelector('.result');
    result.innerHTML = data;
}
    



document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carrega(el);
    }
});

async function carrega(el) {
    const href = el.getAttribute('href');
    // fetch(href)
    // .then(res => {
    //     if(res.status !== 200) throw new Error('Erro 404 NOSSO');
    //     return res.text()
    // })
    // .then(html => carregaResultado(html))
    // .catch(e => console.error(e))

    // try {
    //     const  res = await fetch(href);

    //     if(res.status !== 200) throw new Error('Error 404 do await');

    //     const content = await res.text();
    //     carregaResultado(content);

    // } catch (error) {
    //     console.log(error);
    // }

    axios(href)
    .then(res => {
        console.log(res);
        carregaResultado(res.data);
    })
    .catch(e => {
        console.error('error do axios', e.message);
        carregaResultado('Not Found (teste)');
    });



    // fetch(href)
    // .then(res => {
    //     if(res.status !== 200) throw new Error('Erro 404 NOSSO');
    //     return res.text()
    // })
    // .then(html => carregaResultado(html))
    // .catch(e => console.error(e))
}




