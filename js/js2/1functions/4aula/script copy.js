// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // atributos ou metodos privados
    const ID = 123;

    function metodoInterno1() {
        console.log('penis');
    }
    const metodoInterno2 = () => {
        console.log('penis');
    }


    // atributos ou metodos publicos
    this.nome = nome,
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log(this.nome + ' : sou um metodo');
    }
}

const p1 = new Pessoa('William', 'italia');
const p2 = new Pessoa('Livia', 'italia');


p1.metodo();
console.log(p1);
