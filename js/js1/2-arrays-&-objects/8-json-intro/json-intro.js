const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body',
    },
];

const str2 = JSON.stringify(posts)

console.log(str2);


const fs = require('fs');

fs.readFile('./2-arrays-&-objects/8-json-intro/todo.json', 'utf-8', (err, data) => {
    if (err) {
        console.log('Erro ao ler arquivo:', err);
        return;
    }

    const jsonData = JSON.parse(data);
    const jsonString = JSON.stringify(data);
    console.log(jsonString);

    const obj = JSON.parse(jsonString);
    console.log(obj);
    
})


