const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const contatoController = require("./src/controllers/contatoController");
const { loginRequired } = require("./src/middlewares/middleware")


// Rotas da home
route.get("/", loginRequired, homeController.index);
// route.post("/contato");
// Rotas de login
route.get('/login/', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/user', loginController.login);
route.get('/login/logout', loginController.logout)
route.post('/contato', loginRequired, contatoController.create);
route.get('/contato/find/:id', loginRequired, contatoController.findContato);
route.post('/contato/editar/:id', loginRequired, contatoController.updateContato);
route.post('/contato/deletar/:id', loginRequired, contatoController.delete)
module.exports = route;
