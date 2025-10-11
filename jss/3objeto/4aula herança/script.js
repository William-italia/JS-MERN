// Produto -> aumento, desconto
// Camiseta = tamanho, Caneca = material, Lapis = cor

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

function Camiseta(nome, preco, tamanho) {
    Produto.call(this, nome, preco);
    this.tamanho = tamanho;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

const produto = new Produto('gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'GG');

camiseta.aumento(2.5);
produto.desconto(2.5);


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca Tanjiro', 49.99, 'porcelana', 3);
caneca.estoque = 200;
console.log(caneca);
console.log(caneca.estoque);
console.log(camiseta);
console.log(produto);
