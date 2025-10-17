class Produto {
    constructor(nome, material, preco, estoque) {
        this.nome = nome;
        this.material = material;
        this.preco = preco;
        this.estoque = estoque;
    }

    ligando() {
        return console.log(this.nome + ' está ligando! Vruuuuuuuummmmmmm');
    }
}

const p1 = new Produto('bmw', 'Aço e Carbono', 200000, 2);

p1.ligando();
