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
   const contatos = await contatoModel.find({idUser: this.userId}).lean() || [];
   return this.formataNumero(contatos);
  }

  formataNumero(contatos) {
    return contatos.map(contato => {
      const num = contato.numero;

      const numFormatado = num.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      return {
        ...contato,
        numero: numFormatado
      };
    });
  }
}


module.exports = Contato;