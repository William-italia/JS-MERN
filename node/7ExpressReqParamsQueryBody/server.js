const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}))
// app.use(express.json());

app.get('/', (req, res) => {
  res.send(` <form action="/" method="post">
    <label for="name">name:</label>
    <input type="text" name="name">
    <button>Enviar nome</button>
  </form>`);
});

app.get('/testes/:idUsuarios/:nomes/:idade', async (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.get('/testes/', (req, res) => {

    // let msg = ``;
    // for (let key in req.query) {
    //   msg += ` ${key}: ${req.query[key]}`;
    // }
    
    // res.send(`${msg}`);

    res.json(req.query);
});


app.post('/', (req, res) => {
  console.log(req.body);
  // res.json(req.body);
  const name = req.body.name;
  res.send(`Obrigado por entrar em contato ${name}!`);
})

app.listen(port, () => {
  console.log('Start Server! { http://localhost:3000 }.');
});