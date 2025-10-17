const items = [
    "brush-pincel",
    "pen-caneta",
    "eraser-borracha",
    "ruler-régua",
    "book-livro",
    "lamp-lâmpada",
    "chair-cadeira",
    "table-mesa",
    "keyboard-teclado",
    "mouse-rato",
    "phone-telefone",
    "bottle-garrafa",
    "bag-mochila",
    "clock-relógio",
    "glasses-óculos"
];

const users = [
    {name: 'Brad'},
    {name: 'william'},
    {name: 'Kate'}
];


// for (const item of items) {
//     console.log(item);
// }

// for (const user of users) {
//     console.log(user.name);
// }

const str = 'hello world';

// for (const letter of str) {
//     console.log(letter);
// }

const map = new Map();

map.set('name', 'john');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
    
}