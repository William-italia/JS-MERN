const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
  idUser: { type: String, required: true },
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  numero: { type: String, required: true } 
});

const contatoModel = mongoose.model('Contato', contatoSchema);

class Contato {
  constructor(body, userId) {
    this.body = body;
    this.userId = userId;
  }

  async salvar() {    
    await contatoModel.create({
      idUser: this.userId,
      nome: this.body.nomeContato,
      sobrenome: this.body.sobrenomeContato,
      numero: this.body.numeroContato
    });
  }

  async listar() {
   return await contatoModel.find({idUser: this.userId}).lean() || [];
  }





}


module.exports = Contato;