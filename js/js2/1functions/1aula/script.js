// function declaration (hoisting)
function falaOi() {
    console.log('Oi');
    
}

// falaOi();

// First-class objects (objetos de primeira classe)
const souUmDado = function() {
    console.log("Sou um dado");
};

// souUmDado();

function executaFuncao(func) {
    func();
}

// executaFuncao(souUmDado)

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow();

// setInterval(() => {
//     console.log('tenis');
// }, 1000);

const obj = {
    name: 'Link',
    falar() {
        console.log(`Meu nome é ${this.name}`);
    }
};

obj.falar();