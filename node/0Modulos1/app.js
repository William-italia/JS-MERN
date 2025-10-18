// const {nome, sobrenome, falaNome} = require('./mod1');
// // const mod1 = require('./mod1');
// console.log('vars: ', nome, sobrenome);
// console.log('func: ', falaNome());

const { Pessoa } = require('./mod1');
const axios = require('axios');
const p1 = new Pessoa('Will');

console.log(p1);

axios(`https://api.github.com/users/william-italia`)
    .then(res => console.log(res.data))
    .catch(e => console.log(e));