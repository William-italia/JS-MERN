const h1 = document.querySelector('h1');

const posts = [
    { title: "A importância do sono", body: "Dormir bem melhora a concentração, o humor e a produtividade no dia seguinte." },
    { title: "JavaScript é poderoso!", body: "Com JavaScript, você pode criar desde páginas interativas até aplicações complexas." },
    { title: "Dicas para iniciantes em programação", body: "Comece com HTML, CSS e JavaScript. Pratique sempre e aprenda resolvendo problemas reais." },
    { title: "O benefício dos exercícios físicos", body: "Caminhar diariamente ajuda na saúde mental e física, melhorando a disposição e a criatividade." },
    { title: "Aprendendo a criar conteúdo", body: "Seja autêntico, compartilhe seu conhecimento e publique regularmente para crescer seu público." }
];



function getPosts() {
    setTimeout(() => {
        posts.forEach(post => {
            const div = document.createElement('DIV');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.getElementById('posts').appendChild(div);
        });
    }, 1000);
}

function showError(error) {
    const h3 = document.createElement('h3');
    h3.innerHTML = `<strong>${error}</strong>`;
    document.querySelector('h1').appendChild(h3);
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;

            if(!error) {
                posts.push(post);
                resolve();
            } else {
                reject('Something went wrong')
            }
        }, 2000)
    });
}

createPost({ title: "O impacto da música no cérebro", body: "Ouvir música pode melhorar o foco, reduzir o estresse e estimular a criatividade durante os estudos." })
.then(getPosts)
.catch(showError); 
