const express = require('express');
const app = express();

app.get('/', (req, res) => {res.send('testando <button>Enviar</button>')});

app.post('/', (req, res) => {res.send('recebi form')});

app.get('/contato', (req, res) => {res.send('pagina contato')});

app.listen(3000, () => {
    console.log('Start Server');
    console.log('Acessar: http://localhost:3000');
});