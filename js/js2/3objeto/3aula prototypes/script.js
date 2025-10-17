// // Construtora => molde (classe)
// function Pessoa(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.nomeCompleto = () => {
//         this.nome + ' ' + this.sobrenome;
//     }
// }

// Pessoa.prototype.estouAqui = function() {
//     return `${this.nome} ${this.sobrenome} está aqui!`;
// };

// const data = new Date(); // <- Date = Função construtora
// const p1 = new Pessoa('William', 'I.'); // <- pessoa = função construtora


// // New object => object.prototype
// const  objA = {
//     chaveA: 'A',
//     // __proto__: object.prototype
// };


// // New object => object.prototype
// const  objB = {
//     chaveB: 'B',
//     // __proto__: objA
// };

// const objC = new Object();
// objC.chaveC = 'C';


// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveA, objC.chaveB, objC.chaveC);


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const produto1 = new Produto('MACBOOK', 8000);
produto1.desconto(30);
produto1.aumento(30);
console.log(produto1);


const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

console.log(p2);
p2.aumento(10);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    peso: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 20
    },
    cor: {
        value: 'Rosa'
    }
});
p3.preco = 113;
p3.aumento(10)
console.log(p3);
