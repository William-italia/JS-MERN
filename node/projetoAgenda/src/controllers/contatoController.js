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
        return res.redirect('/');
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
    
    const contatoModel = new Contato(req.body, req.session.user._id);
    const contatos = await contatoModel.listar();
    
    res.render('index', {contatos});


  } catch(e) {
    console.log(e);
    res.redirect('/');
  }
}

exports.findContato = async (req, res) => {
  const contato = new Contato({}, req.session.user._id);
  const contatoFind = await contato.findContato(req.params.id);
  
  res.json(contatoFind);
}



exports.updateContato = async (req, res) => {
  try {

    const contato = new Contato(req.body, req.session.user._id);

    await contato.updateContato(req.params.id);
    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      return req.session.save(() => res.redirect('/'));
    }

    req.flash('contatoSuccess', 'Contato atualizado com sucesso!');
    req.session.save(() => res.redirect('/'));
    
  } catch(e) {
    console.log(e);
    
  }
}

exports.delete = async (req, res) => {
  try {
    const contato = new Contato({}, req.session.user._id);
    await contato.deletarContato(req.params.id);
    req.flash('contatoSuccess', 'Contato Deletado com sucesso!');
    req.session.save(() => {
      res.redirect('/');
    })
  } catch(e) {
    console.log(e);
    
  }
}