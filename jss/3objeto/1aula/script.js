const pessoa = {
    nome: 'William',
    sobrenome: 'italia'
};

const chave = 'nome';

// console.log(pessoa.nome);
// console.log(pessoa[chave]);
// console.log(pessoa.sobrenome);

const pessoa1 = new Object();

pessoa1.nome = 'William';
pessoa1.sobrenome = 'italia';
pessoa1.idade = 21;
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`);
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

// console.log(pessoa1.getDataNascimento());

// pessoa1.falarNome();
// console.log(pessoa1.nome, pessoa1.sobrenome);
// delete pessoa1.nome

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }

function criaPessoa(email, nome, sobrenome, senha) {
    return {
        email,
        nome,
        sobrenome,
        senha,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }

        
    }
}

const p1 = criaPessoa('William@hotmail.com', 'william', 'italia', '123456');

console.log(p1.nomeCompleto);
