// get Celcius

function getCel(F) {
    return ((F - 32) * 5) / 9;
}

console.log(getCel(32));
// console.log(getCel(50));
// console.log(getCel(68));
// console.log(getCel(77));
// console.log(getCel(104));
// console.log(getCel(212));

// get min and max
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nums1 = [12, 20, 32, 2, 7, 10, 80, 1, -10];

function minMax(arr) {
    let min, max;

    min = Math.min(...arr);
    max = Math.max(...arr);

    return {min, max}
}

console.log(minMax(nums));


function minANDmax(Nums) {
    let min = Nums[0];
    let max = Nums[0];

    for (let i = 1; i <= Nums.length; i++) {
        if (Nums[i] < min) {
            min = Nums[i];
        }

        if (Nums[i] > max) {
            max = Nums[i];
        }
    }

    return {min, max}
}

console.log(minANDmax(nums1));


// IIFE
(function (C, L) {
    const Area = C * L;
    console.log(`A área de um retângulo com comprimento de ${C} e largura de ${L} é ${Area}.`);
})(10, 5);

// Par impar
function parImpar(x) {
    if (x % 2 === 0) {
        return `Par`
    } else {
        return `Impar`
    }
}

console.log(parImpar(2));


function fatorial(x) {
    if (x < 1) {
        return `Fatorial não é definido para números negativos.`
    }

    let resultado = 1;

    for (let i = 1; i <= x; i++) {
        resultado *= i;
    }

    return resultado;
}

function SomaNums(n) {
    if (n === 0) {
        return n;
    } else {
        return n + SomaNums(n - 1);
    }
}

function FibonacciRecursivo(f) {
    if (f === 0){
        return 0;
    } else if (f === 1) {
        return 1;
    } else {
       return FibonacciRecursivo(f - 1) + FibonacciRecursivo (f - 2);
    }
}

function NumeroDeDigitos(Num) {
    if (Num === 0) {
        return 0;
    } else {
       return 1 + NumeroDeDigitos(Math.floor(Num / 10))
    }
}


function Potenciacao(a, b) {
    if (b === 0) {
        return 1;
    } else {
        return a * Potenciacao(a, b - 1);  
    }
}


function somaDosDigitos(num) {
    if (num === 0) {
        return 0;
    } else {
        return num % 10 + somaDosDigitos(Math.floor(num / 10))
    }
}


function numeroPrimo(num) {
    
    let NumerosPrimos = [];

    for (let i = 2; i <= num; i++) {
        let isPrimo = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrimo = false;
                break;
            }
        }

        if(isPrimo) {
            NumerosPrimos.push(i);
        }
    }

    return NumerosPrimos;
}

console.log(numeroPrimo(20)); 

const n = 10;




function trianguloRetangulo(linha) {
    for (let i = 0; i < linha; i++) {
        let linha = '';
    
        for (let j = 0; j <= i; j++) {
            linha += ' * ';
        }
    
        console.log(linha);
    }
}


trianguloRetangulo(10);

const somaDigitos = (n) => {

    let total = 0;

    for (let i = 0; i <= n; i++) {
        total += i;
    }

    console.log(total);

}

somaDigitos(4);

function MaxeMin(arr) {
    // const Min = Math.min(...arr);
    // const Max = Math.max(...arr);

    // return `Minimo: ${Min} Max: ${Max}`;
    let min = [0];
    let max = [0];

    arr.forEach(num => {
        if (num < min) {
            min = num;
        }

        if (num > max) {
            max = num;
        }
    });


    return `Minimo: ${min} Max: ${max}`;
} 

const numeros = [10, 20, 30, 14, 3, 100, 3452, 123, -2, -123134.213, 23];

console.log(MaxeMin(numeros));

function inverteString(string) {
    return string.split('').reverse().join('');
}

console.log(inverteString('alanzoka'));

function contaVogais(str) {
    let count = 0;
    const Vowels = 'AEIOUaeiou';

    for (let i = 0; i < str.length; i++) {
        if(Vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(contaVogais('Exemplo'));
console.log(contaVogais('Programador'));

const polindromo = (str) => {

    const Str = str.replace(/[\s-]/g, '').toLowerCase();
    const strOrigin = Str;
    const strReverse = Str.split('').reverse().join('');

    let isPolindromo = true;

    if (strOrigin !== strReverse) {
        return isPolindromo = false
    }

    return isPolindromo;
}

const text = 'socorram-me subi no ônibus em Marrocos';

console.log(`A string "${text}" é um polindromo? ${polindromo(text) ? 'Sim' : 'Não'} (${text.split('').reverse().join('')})`);

function randomArr (tamanho ,min, max) {
    let arr = [];

    for (let i = 0; i < tamanho; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return arr;
}


const resultadoArr = randomArr(2, 10, 20);
console.log(
    `O array gerado de números aleatórios é: [${resultadoArr.join(', ')}]`
);

function elementoMaisFrequente(arr) {
    const contagem = {};

    for (let item of arr) {
        contagem[item] = (contagem[item] || 0) + 1;
    }

    let maisFrequente = null;
    let maiorFrequencia = 0;

    for (let item in contagem){
        if(contagem[item] > maiorFrequencia) {
            maiorFrequencia = contagem[item];
            maisFrequente = item;
        }
    }

    return maisFrequente;
}

const arr = [5, 5, 5, 5, 4, 3, 2, 1, 5, 3];
const resultado = elementoMaisFrequente(arr);

console.log(
    `O elemento mais frequente é: ${resultado}`
); 








