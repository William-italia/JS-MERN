exports.middlewareGlobal = (req, res, next) => {
  // mensagens separadas de login/registro
  res.locals.registerErrors = req.flash('registerErrors');
  res.locals.registerSuccess = req.flash('registerSuccess');
  res.locals.loginErrors = req.flash('loginErrors');
  res.locals.loginSuccess = req.flash('loginSuccess');
  res.locals.contatoErrors = req.flash('contatoErrors');
  res.locals.contatoSuccess = req.flash('contatoSuccess');

  res.locals.title = 'Agenda'; // valor padrão
  res.locals.user = req.session.user;
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if(err) {
    return res.render('404', {title: 'Error 404', user: null})
  }
  next();
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}

exports.loginRequired = (req, res, next) => {
  if(!req.session.user) {
    req.flash('errors', 'Você precisa fazer login.');
    req.session.save(() => res.redirect('/login'));
    return;
  }
  next();
}