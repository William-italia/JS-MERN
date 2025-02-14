const h1 = document.querySelector('h1');

const posts = [
    { title: "A importância do sono", body: "Dormir bem melhora a concentração, o humor e a produtividade no dia seguinte." },
    { title: "JavaScript é poderoso!", body: "Com JavaScript, você pode criar desde páginas interativas até aplicações complexas." },
    { title: "Dicas para iniciantes em programação", body: "Comece com HTML, CSS e JavaScript. Pratique sempre e aprenda resolvendo problemas reais." },
    { title: "O benefício dos exercícios físicos", body: "Caminhar diariamente ajuda na saúde mental e física, melhorando a disposição e a criatividade." },
    { title: "Aprendendo a criar conteúdo", body: "Seja autêntico, compartilhe seu conhecimento e publique regularmente para crescer seu público." }
];

function createPost(post , cb) {
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 5000);
}

function getPosts() {
    setTimeout(() => {
        posts.forEach(post => {
            const div = document.createElement('DIV');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.getElementById('posts').appendChild(div);
        });
    }, 1000);
}


createPost( { title: "O impacto da música no cérebro", body: "Ouvir música pode melhorar o foco, reduzir o estresse e estimular a criatividade durante os estudos." }, getPosts);