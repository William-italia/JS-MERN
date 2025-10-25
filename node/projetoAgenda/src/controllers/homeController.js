const Contato = require('../models/contatoModel');


exports.index = async (req, res) => {  

    if (!req.session.user) {
    req.flash('loginErrors', 'Você precisa estar logado para criar contatos.');
    req.session.save(() => res.redirect('/login'));
    return;
    }    

    let contatos = new Contato(req.body, req.session.user._id);
    contatos = await contatos.listar();
    
    res.render('index', {
      title: 'Home',
      user: req.session.user,
      contatos
    });  

    return
}

