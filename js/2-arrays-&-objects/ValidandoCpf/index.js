// 705.484.450-52

// os primeiros 9 digitos tem q ser multiplicados de 10 a 2
//  7 0 5  4  8  4  4  5  0
// 10 9 8  7  6  5  4  3  2 
// 70 0 40 28 48 20 16 15 0 = 237

// 11 - (237 % 11) = 5 (primeiro digito)
// if num > 9 = 0

//  7  0  5  4  8  4  4  5  0 5
//  11 10 9  8  7  6  5  4  3 2 
//  70  0 40 28 48 20 16 15 0 10 = 284

// 11 - (284 % 11) = 2
// if num > 9 = 0

function ValidaCPF(cpf) {

    let cpfClean =  cpf.replace(/\D+/g, '');    

    if (cpfClean.length !== 11 || /^(\d)\1{10}$/.test(cpfClean)) {
        console.log('CPF INVÁLIDO');
        return;
    }
    
    let cpfArray = Array.from(cpfClean.slice(0, -2));
    
    let Digit1 = Digit(cpfArray, 10);
    let Digit2 = Digit(Digit1, 11);

    let cpfInteiro = Digit2.join('');
    let cpfFormatado = `${cpfInteiro.slice(0, 3)}.${cpfInteiro.slice(3, 6)}.${cpfInteiro.slice(6, 9)}-${cpfInteiro.slice(9)}`;
    
    console.log(cpfClean === cpfInteiro ? `✅ CPF Válido: ${cpfFormatado}` : '❌ CPF Inválido');

}

function Digit(arr, Mul) {

    let result = arr
    .map((num, index) => Number(num) * (Mul - index))
    .reduce((acc, num) => acc + Number(num), 0);
    
    result = (11 - (result % 11)) > 9 ? 0 : (11 - (result % 11));

    return [...arr, String(result)];

}


// Testes
ValidaCPF('705.484.450-52');
ValidaCPF('070.987.720-03');
ValidaCPF('111.111.111-11');
ValidaCPF('123.456.789-00');
