const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

// use
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(routes);

// set
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// listen
app.listen(3000, () => {
  console.log('start server! {http://localhost:3000}');
});


