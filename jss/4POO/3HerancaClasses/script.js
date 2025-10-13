class DispositivoEletronico {
    
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    };

    ligar() {
        if(this.ligado) {
            console.log('Dispositivo já ligado!');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log('Dispositivo já desligado!');
            return;
        }
        this.ligado = false;
    }

}

class pc extends DispositivoEletronico {
    constructor(nome, cor, processador) {
        super(nome);
        this.cor = cor;
        this.processador = processador;
    } 
}

const pc1 = new pc('pc', 'Vermelho', 'Ryzen7');

pc1.ligar();
console.log(pc1);
