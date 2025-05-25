// super classe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log('Saldo Insuficiente! Alerta! Você é pobre!');
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} \n Saldo: R$${this.saldo.toFixed(2)}` );
};

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log('Saldo Insuficiente! Alerta! Você é pobre!');
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
};


function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


const conta1 = new Conta(104, 2046, 100);
const cc1 = new CC(104, 2045, 10, 100);
const cp = new CP(103, 203, 10)

console.log(cp);
cp.sacar(10);
console.log(cp);
