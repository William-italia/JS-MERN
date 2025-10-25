// assets/js/form-popup.js
document.addEventListener('DOMContentLoaded', () => {
  const Cadastrar = document.querySelector('.cadastro');
  const Close = document.querySelector('.close');
  const formPopup = document.querySelector('.form-popup');

  Cadastrar.addEventListener('click', () => {
    formPopup.classList.add('active');
  });

  Close.addEventListener('click', () => {
    formPopup.classList.remove('active');
  });
});
