class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} Está falando!`);
    }
}

const p1 = new Pessoa('William', 'italia');

function Pessoa2(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} Está falando!`);    
}

const p2 = new Pessoa2('Vanessa', 'Italia');

console.log(p1);
console.log(p2);
p1.falar();
p2.falar();