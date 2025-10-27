// assets/js/form-popup.js
document.addEventListener('DOMContentLoaded', () => {
  const Cadastrar = document.querySelector('.cadastro');
  const Close = document.querySelector('.close');
  const formPopup = document.querySelector('.form-popup');
  const formContato = document.querySelector('#form-contato');
  const btnForm = document.querySelector('#btnSubmit');
  const formDesc = document.querySelector('#form-desc');
  const editarBtn = document.querySelectorAll('.actions button[title="Editar"]');

  const inputs = {
    id: document.querySelector('#idContato'),
    nome: document.querySelector('#nomeContato'),
    sobrenome: document.querySelector('#sobrenomeContato'),
    numero: document.querySelector('#numeroContato'),
    email: document.querySelector('#emailContato')
  };

  function resetForm() {
    Object.values(inputs).forEach(input => input.value = '');
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

  editarBtn.forEach(btn => {
    btn.addEventListener('click', async e => {
      resetForm();
      formPopup.classList.add('active');

      const id = e.target.dataset.id;

      try {
        const response = await fetch(`/contato/find/${id}`);
        const contato = await response.json();
        console.log(contato);

        inputs.id.value = contato._id;
        inputs.nome.value = contato.nome;
        inputs.sobrenome.value = contato.sobrenome;
        inputs.numero.value = contato.numero;
        inputs.email.value = contato.email;

        formContato.action = `/contato/editar/${id}`;
        formDesc.textContent = 'Editando Contato';
        btnForm.textContent = 'Salvar';
      } catch (err) {
        console.error('Erro ao buscar contato:', err);
      }
    });
  });
});
