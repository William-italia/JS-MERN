// define property - defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        value: estoque,
        writable: true, // pode alterar
        enumerable: true, // mostra chave
        configurable: true // configuravel
    });

    Object.defineProperties(this, {
        nome: {
            value: nome,
            writable: true, // pode alterar
            enumerable: true, // mostra chave
            configurable: true // configuravel    
        },
        preco: {
            value: preco,
            writable: true, // pode alterar
            enumerable: true, // mostra chave
            configurable: true // configuravel
        },
    });

}

const p1 = new Produto('MacBook', 10000, 5);
console.log(p1);
