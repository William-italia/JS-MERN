// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

axios('pessoas.json')
  .then(res => carregaPessoaNaPagina(res.data))


// async function getPersons() {
//     const request = await fetch('pessoas.json');
//     const json = await request.json();

//     carregaPessoaNaPagina(json);

// }

// getPersons();


// fetch('pessoas.json')
//   .then(res => {return res.json()})
//   .then(json => carregaPessoaNaPagina(json));



function carregaPessoaNaPagina(json) {
  const table = document.createElement('table');

  for(let pessoa of json) {
    const tr = document.createElement('tr');
    let td1 = document.createElement('td');

    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);
    
    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.email;
    tr.appendChild(td2);

    table.appendChild(tr);

  }

  const result = document.querySelector('.resultado');
  result.appendChild(table);
}


// function carregaElementosNaPagina(json) {
//   const table = document.createElement('table');

//   for(let pessoa of json) {
//     const tr = document.createElement('tr');

//     let td1 = document.createElement('td');
//     td1.innerHTML = pessoa.nome;
//     tr.appendChild(td1);

//     let td2 = document.createElement('td');
//     td2.innerHTML = pessoa.idade;
//     tr.appendChild(td2);

//     table.appendChild(tr);
//   }

//   const resultado = document.querySelector('.resultado');
//   resultado.appendChild(table);
// }
