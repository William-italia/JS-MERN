// assets/js/form-popup.js
document.addEventListener('DOMContentLoaded', () => {
  const Cadastrar = document.querySelector('.cadastro');
  const Close = document.querySelector('.close');
  const formPopup = document.querySelector('.form-popup');
  const formContato = document.querySelector('#form-contato');
  const btnForm = document.querySelector('#btnSubmit');
  const formDesc = document.querySelector('#form-desc');
  const editarBtn = document.querySelector('.actions button[title="Editar"');

  const inputs = {
    id: document.querySelector('#idContato'),
    nome: document.querySelector('#nomeContato'),
    sobrenome: document.querySelector('#sobrenomeContato'),
    numero: document.querySelector('#numeroContato'),
    email: document.querySelector('#emailContato')
  }

  function resetForm() {
    Object.values(inputs).forEach(input => {input.value = ''});
    formContato.action = '/contato';
    btnForm.textContent = 'Cadastrar';
    formDesc.textContent = 'Adicionar Contato';
  }


  Cadastrar.addEventListener('click', () => {
    formPopup.classList.add('active');
    resetForm();
  });

  Close.addEventListener('click', () => {
    formPopup.classList.remove('active');
    resetForm();
  });


  editarBtn.addEventListener('click', async e => {
    resetForm();
    formPopup.classList.add('active');

    const id = e.target.dataset.id;
    
    const response = await fetch(`/contato/find/${id}`);
    const contato = await response.json();
    console.log(contato);
    
    document.querySelector('#idContato').value = contato._id;
    document.querySelector('#nomeContato').value = contato.nome;
    document.querySelector('#sobrenomeContato').value = contato.sobrenome; 
    document.querySelector('#numeroContato').value = contato.numero;
    document.querySelector('#emailContato').value = contato.email;
     
    formContato.action = `/contato/editar/${id}`;
    formDesc.textContent = 'Editando Contato';
    btnForm.textContent = 'Salvar';

  });
});
