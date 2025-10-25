const mongoose = require('mongoose');
const validator = require('validator');

const contatoSchema = new mongoose.Schema({
  idUser: { type: String, required: true },
  nome: { type: String, required: true },
  sobrenome: { type: String,required: false, default: '' },
  numero: { type: String,required: false, default: ''},
  email: {type: String,required: false, default: ''},
  date: {type: Date, default: Date.now }
});

const contatoModel = mongoose.model('Contato', contatoSchema);

class Contato {
  constructor(body, userId) {
    this.body = body;
    this.errors = [];
    this.userId = userId;
    this.contato = null;
  }

  async salvar() {    
    this.valida();
    if(this.errors.length > 0) return;

    this.contato = await contatoModel.create({
      idUser: this.userId,
      nome: this.body.nomeContato,
      sobrenome: this.body.sobrenomeContato,
      numero: this.body.numeroContato,
      email: this.body.emailContato
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

  valida() {
    this.cleanUp();
    if(this.body.emailContato && !validator.isEmail(this.body.emailContato)) this.errors.push('E-mail Invalido!') 
    if(!this.body.nomeContato) this.errors.push('Nome é um campo obrigatório!');
    if(!this.body.emailContato && !this.body.numeroContato) this.errors.push('Pelo menos um contato tem que ser adicionado! (Email ou Telefone');
    
  }

  cleanUp() {
    for(const key in this.body) {
      if(typeof this.body[key] !== 'string') {
        this.body[key] = '';
      } 
    }
  }
}


module.exports = Contato;