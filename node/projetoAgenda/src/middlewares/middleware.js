exports.middlewareGlobal = (req, res, next) => {
  // mensagens separadas de login/registro
  res.locals.registerErrors = req.flash('registerErrors');
  res.locals.registerSuccess = req.flash('registerSuccess');
  res.locals.loginErrors = req.flash('loginErrors');
  res.locals.loginSuccess = req.flash('loginSuccess');
  res.locals.user = req.session.user;
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if(err) {
    return res.render('404')
  }

  next();
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}