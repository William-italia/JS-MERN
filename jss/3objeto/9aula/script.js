// Getter / Setters
function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {

        enumerable: true, // mostra a chave e valor
        configurable: true, // pode apagar e alterar
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (isNaN(valor)) return; 
            estoque = valor;
        }
        
    });

    Object.defineProperties(this, {
        nome: { enumerable: true, value: nome },
        preco: { enumerable: true, value: preco },
    })
}

Produto.prototype.Detalhes = function() {
    const precoFormatado = this.preco.toLocaleString('pt-BR');
    return `Modelo: ${this.nome} valor: R$${precoFormatado},00 Estoque: ${this.estoque}`;
};

function Caneca(nome, preco, estoque, material) {
    Produto.call(this, nome, preco, estoque);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.Detalhes = function() {
    return `${Produto.prototype.Detalhes.call(this)} Material: ${this.material}`;
}

function Carro(nome, preco, estoque, material, cavalos) {
    Caneca.call(this, nome, preco, estoque);
    this.cavalos = cavalos;

    const permitidos = Carro.materiaisPermitidos[nome.toLowerCase()];

    Object.defineProperty(this, 'material', {
        enumerable: true,
        configurable: true,
        get: function() {
            return material;
        },
        set: function(valor) {
            if(!permitidos) {
                console.log(`Modelo: ${valor} não está registrado na lista de materiais permitidos`);
                return;
            };

            if(!permitidos.includes(valor)) {
                console.log(`${valor} não é compativel com ${nome}. Materiais permitidos: ${permitidos.join(', ')}`);
                return;
            }

            material = valor;
        }
    });

    if(!permitidos || !permitidos.includes(material)) {
        console.log(`${material} não é compativel com ${nome} ou não existe. Materiais Permitidos: ${permitidos.join(', ')}`);
        material = permitidos ? permitidos[0] : null;
    }
}

Carro.prototype = Object.create(Caneca.prototype);
Carro.prototype.constructor = Carro;

Carro.prototype.Detalhes = function() {
    return `${Caneca.prototype.Detalhes.call(this)} Potencia: ${this.cavalos}Cv`;
}

Carro.registrarModelo = function(modelo, materiais) {
    this.materiaisPermitidos[modelo.toLowerCase()] = materiais;
}

Carro.materiaisPermitidos = {
    bmw: ['Aço', 'Carbono'],
}

Carro.registrarModelo('ferrari', ['Carbono', 'Aço', 'Ferro']);

const p1 = new Produto('Camiseta', 20, 3);
const caneca = new Caneca('Caneca', 15, 5, 'Porcelana');
const carro = new Carro('bmw', 200000, 1, 'Aço', 184);
const carro1 = new Carro('ferrari', 2000000, 2, 'Carbono', 300);

console.log(carro1);

// console.log(Carro.materiaisPermitidos);
// carro.material = 'Carbono';
