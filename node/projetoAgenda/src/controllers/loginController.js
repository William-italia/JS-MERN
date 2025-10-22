const Login = require('../models/loginModel');

exports.index = (req, res) => {
  console.log(req.session.user);
  res.render('login');
  return
}

exports.register = async (req, res) => {

  try {
    const login = new Login(req.body);
    await login.register();

    if(login.errors.length > 0) { 
      req.flash('registerErrors', login.errors);
      req.session.save(function() {
        return res.redirect('/login');
      });
      return;
    }

    req.flash('registerSuccess', 'Seu usuário for criado com sucesso.');
    req.session.save(function() {
      return res.redirect('/login');
    })
  } catch (error) {
    console.log(error);
    res.render('404');
  }
}


exports.login = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.login();

    if(login.errors.length > 0) {
        req.flash('loginErrors', login.errors);
        req.session.save(function() {
        return res.redirect('/login');
      });
      return;
    }
    req.flash('loginSucess', 'Você entrou no sistema.')
    req.session.user = login.user;
    console.log(req.session.user);
    req.session.save(function() {
      return res.redirect('/');
    })
  } catch (error) {
    console.log(error);
    res.render('404');
  }

}

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login/');
}