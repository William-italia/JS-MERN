exports.paginaInicial = (req, res) => {
    res.render('index');
}

exports.paginaInicialPost = (req, res) => {
  console.log(req.body);
  res.send(`/post <br> ${req.body.name}`);
}

// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.send(`/post <br> ${req.body.name}`);
//   res.send
// });