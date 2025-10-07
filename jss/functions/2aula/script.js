function funcao() {
    // console.log(arguments);
    let total = 0;
    for (let argumento of arguments) {
        if (typeof argumento === 'number') {
            total+= argumento;
        }
    }

    return total
}

// funcao('Valor', 1, 2, 3, 4, 5, 65, 6);

// console.log(funcao('Valor', 1, 2, 3, 4, 5, 'teste', 6));
 
// function conta(opp, acc, ...nums) {

//     console.log(opp, acc, nums);

//     for (let num of nums) {
//         if(opp === '+') {
//             acc+= num;
//         } else if(opp === '-') {
//             acc-= num;
//         }
//     }

//     return console.log(acc);

// }



function conta(opp, acc, ...nums) {
  const operacoes = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  const op = operacoes[opp];
  if (!op) return console.log('Operador inválido');

  const total = nums.reduce(op, acc);
  console.log(total);
}

conta('+', 0, 10, 20, 30); // 60


function conta1(opp, acc, ...nums) {
    
    const operacoes = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    const op = operacoes[opp];

    if (!op) return console.log('Operador Invalido');
    
    const total = nums.reduce(op, acc);
    
    console.log(total);
}

conta1('*', 1, 10, 20, 30, 40, 50);