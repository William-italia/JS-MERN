const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcrypt');


const registerSchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true}
});
 
const User = mongoose.model('User', registerSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login() {
    this.valida();
    if(this.errors.length > 0) return;

    const user = await User.findOne({email: this.body.email});
    
    if(!user) { 
      this.errors.push('Email não existe!');
      return; 
    }

    const validPass = await bcrypt.compare(this.body.password, user.password);

    if(!validPass) { 
      this.errors.push('Senha Invalida!'); 
      this.user = null;
      return; 
    }

    this.user = user;
  }

  async register() {
    this.valida()
    if(this.errors.length > 0) return;

    await this.userExists();
    if(this.errors.length > 0) return;

 
    const hashedPassword = await this.hash(this.body);
    this.body.password = hashedPassword;
    this.user = await User.create(this.body);

  }

  async userExists() {
    this.user = await User.findOne({email: this.body.email});
    if (this.user) this.errors.push('Email já foi registrado!'); 
  }

  async hash(body) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    return hashedPassword;
  }

  valida() {
    this.cleanUp();
    if(!validator.isEmail(this.body.email)) this.errors.push('E-mail Invalido!') 
    if(this.body.password.length < 3 || this.body.password.length >= 8) this.errors.push('A senha precisa ter entre 3 e 8 caracteres.');
  }

  cleanUp() {
    for(const key in this.body) {
      if(typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    }
  }
}

module.exports = Login;


 
