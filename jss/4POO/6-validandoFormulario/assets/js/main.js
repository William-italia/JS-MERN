class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  } 

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const checkFields = this.isValid();
    
    console.log(checkFields);      
    if(checkFields) {
      for (let ok of this.formulario.querySelectorAll('.validar')) {
        ok.classList.add('ok');
      }
    }
  
  }

  isValid() {

    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }


    for(let campo of this.formulario.querySelectorAll('.validar')) {
      
      const label = campo.previousElementSibling.innerText;

      if(!campo.value) {
        this.createError(campo, `Campo "${label}" não pode estar em branco`);
        valid = false;
      }

      if(campo.classList.contains('cpf') && campo.value !== '') {
        if(!this.validaCPF(campo)) valid = false;
      }

      if(campo.classList.contains('usuario') && campo.value !== '') {
        if(!this.validaUsuario(campo)) valid = false;
      }

      if(campo.classList.contains('senha') && campo.value !== '') {
        if(!this.validaSenha(campo)) valid = false;
      }

      if(campo.classList.contains('repetir-senha') && campo.value !== ''){
        if(!this.validaRepetirSenha(campo)) valid = false;
      }
    }

    return valid;
  } 

  validaSenha(campo) {
    const senha = campo.value;

    if(senha.length < 6 || senha.length > 12) {
      this.createError(campo, 'Senha precisa ter entre 6 e 12 caracteres');
      return false;
    }
    return true;
  }

  validaRepetirSenha(campo) {
    const senha = this.formulario.querySelector('.senha').value;

    if(campo.value !== senha) {
      this.createError(campo, 'Ambas as senhas precisam ser iguais!');
      return false;
    }

    return true;
  }


  validaUsuario(campo) {
    const usuario = campo.value;
    // let valid = true;

    if(usuario.length < 3 || usuario.length > 12) {
      this.createError(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
      return false;
    }
    if(!usuario.match(/^[a-zA-Z0-9_]+$/g)) {
      this.createError(campo, 'Usuário só pode conter letras e/ou numeros');
      return false;
    }

    return true;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if(!cpf.valida()) {
      this.createError(campo, `Cpf invalido`);
      return false;
    }
    return true;
  }

  createError(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }

}

const valida = new ValidaFormulario();