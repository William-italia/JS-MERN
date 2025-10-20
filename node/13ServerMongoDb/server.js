require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const uri = "";
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('Conectei a base de dados');
    app.emit('pronto');
  })
  .catch(e => console.log(e));


const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');
// use
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

// nossos middlewares proprios
app.use(middlewareGlobal);
app.use(routes);
// set
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('pronto', () => {
  // listen
  app.listen(3000, () => {
    console.log('start server! {http://localhost:3000}');
  });
});



