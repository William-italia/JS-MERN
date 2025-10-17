class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    // metodo de instancia
    // trocaPilha() {}

    // metodo estatico
    static trocaPilha() {console.log('Trocando Pilha...');}
}

const c1 = new ControleRemoto('samsung');
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
console.log(c1);
ControleRemoto.trocaPilha();
