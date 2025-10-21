const Contatos = require('../../contatos.json');

exports.index = (req, res) => {  
  res.render('index', {contatos: Contatos});  
  return
}



