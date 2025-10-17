function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log('Saldo Insuficiente');
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`$Ag/C.: ${this.agencia}/${this.conta} Saldo: ${this.saldo.toFixed(2)}` );
};


function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        if (valor > (this.limite)) {
            console.log('Limite Atingido');
        }
        if(this.saldo < valor && this.limite < valor) {
            console.log('Saldo Insuficiente');
        }
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const c1 = new CP(11, 22, 10);
const cc1 = new CC(12, 200, 100, 110);

c1.sacar(11);
cc1.sacar(220);