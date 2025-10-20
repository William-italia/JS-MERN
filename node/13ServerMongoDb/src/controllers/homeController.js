exports.paginaInicial = (req, res) => {
  res.render('index');  
  return;
}

exports.paginaInicialPost = (req, res) => {
  res.send(req.body);
  return;
}

// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.send(`/post <br> ${req.body.name}`);
//   res.send
// });