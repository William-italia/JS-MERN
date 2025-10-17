// filter, map, reduce

const numeros = [5, 50, 80, 1, 2, 3, 4 ,5 ,6 ,7, 11, 15, 22, 27];

const numerosM = numeros.filter(n => n > 10);

// console.log(numerosM);
 

const pessoas = [
  { nome: 'Luiz', idade: 25 },
  { nome: 'Otavio', idade: 32 },
  { nome: 'Miranda', idade: 28 },
  { nome: 'Alice', idade: 21 },
  { nome: 'Beatriz', idade: 30 },
  { nome: 'Carlos', idade: 27 },
  { nome: 'Fernanda', idade: 35 },
  { nome: 'Gabriel', idade: 19 },
  { nome: 'Isabela', idade: 23 },
  { nome: 'João', idade: 40 },
  { nome: 'Ricardo', idade: 31 },
  { nome: 'Patrícia', idade: 26 },
  { nome: 'Eduardo', idade: 38 },
  { nome: 'Tatiane', idade: 29 },
  { nome: 'Rafael', idade: 24 },
  { nome: 'Larissa', idade: 22 },
  { nome: 'Bruno', idade: 33 },
  { nome: 'Camila', idade: 36 },
  { nome: 'Henrique', idade: 20 },
  { nome: 'Paula', idade: 41 },
  { nome: 'Diego', idade: 37 },
  { nome: 'Juliana', idade: 28 },
  { nome: 'Marcos', idade: 34 },
  { nome: 'Renata', idade: 23 },
  { nome: 'Sérgio', idade: 45 },
  { nome: 'Natália', idade: 27 },
  { nome: 'Thiago', idade: 31 },
  { nome: 'Sabrina', idade: 25 },
  { nome: 'Pedro', idade: 18 },
  { nome: 'Débora', idade: 29 },
  { nome: 'Antônio', idade: 50 },
  { nome: 'Maria Helena', idade: 54 },
  { nome: 'José', idade: 58 },
  { nome: 'Helena', idade: 52 },
  { nome: 'Paulo', idade: 61 },
  { nome: 'Regina', idade: 55 },
  { nome: 'Nelson', idade: 63 },
  { nome: 'Cecília', idade: 47 },
  { nome: 'Rosa', idade: 70 },
  { nome: 'Francisco', idade: 66 }
];

// nomes com +5 letras
// pessoas com 50 ou mais 
// nomes que terminam com a letra A
// const nomesGrandes = pessoas
//     .filter(p => p.nome.length >= 5)
//     .map(p => p.nome);

// const pessoasComIdade = pessoas.filter(p => p.idade >= 50);

// const nomesTerminadosComA = pessoas
//     .filter(p => p.nome.toUpperCase().endsWith('A'))
//     .map(p => p.nome);

function filtrarPessoas(condicao, apenasNomes = false) {
    const resultado = pessoas.filter(condicao); 
    return apenasNomes ? resultado.map(p => p.nome) : resultado;
}

const nomesGrandes = filtrarPessoas(p => p.nome.length >= 5, true);
const pessoasComIdade = filtrarPessoas(p => p.idade >= 50).map(p => p.nome + ', idade: ' + p.idade);
const  nomesTerminadosComA = filtrarPessoas(p => p.nome.toUpperCase().endsWith('O'), true);

console.log(nomesGrandes);
console.log(pessoasComIdade);
console.log(nomesTerminadosComA);


