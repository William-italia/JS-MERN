const Contato = require('../models/contatoModel');

exports.create = async (req, res) => {
  try {
    if (!req.session.user) {
      req.flash('loginErrors', 'Você precisa estar logado para criar contatos.');
      req.session.save(() => res.redirect('/login'));
      return;
    }    

    const contato = new Contato(req.body, req.session.user._id);
    await contato.salvar(); 

    if(contato.errors.length > 0) {
      req.flash('contatoErrors', contato.errors);
      req.session.save(function() {
        return res.redirect('index');
      })
      return;
    }

    req.flash('contatoSuccess', 'Contato criado com sucesso!')
    req.session.save(() => res.redirect('/'));

  } catch (e) {
    console.log(e);
    res.redirect('/');
  }
};

exports.listar = async (req, res) => {
  try {
    
    const contatos = new Contato(req.body, req.session.user._id);
    contatos = await contatos.listar();
    res.render('index', {contatos});


  } catch(e) {
    console.log(e);
    res.redirect('/');
  }
}