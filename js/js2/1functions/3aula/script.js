// return
// retorna um valor
// termina funcao

 function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
 }

 console.log(rand());
 

function criaP(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            console.log(valor);
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    }
}


const p1 = criaP('william', 'italia');


console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Pedro Italia';
console.log(p1.nomeCompleto);
