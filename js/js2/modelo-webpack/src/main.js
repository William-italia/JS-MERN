import GeraCPF from './modules/geraCPF';
import './assets/css/style.css';


(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    
    cpfGerado.innerHTML = formata(gera.geraNovoCpf());
})();

function formata(cpf) {
    return (
        cpf.slice(0, 3) + '.' +
        cpf.slice(3, 6) + '.' +
        cpf.slice(6, 9) + '-' +
        cpf.slice(-2)
    );
}