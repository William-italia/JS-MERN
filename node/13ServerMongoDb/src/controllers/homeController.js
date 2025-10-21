exports.paginaInicial = (req, res) => {  
  res.render('index', {
    titulo: 'william',
    numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  });  
  return
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