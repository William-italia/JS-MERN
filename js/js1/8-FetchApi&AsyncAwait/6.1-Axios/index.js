// fetch('./pessoas.json')
//     .then(res => res.json())
//     .then(data => loadElements(data));

// axios('./pessoas.json')
//     .then(res => {
//         console.log(res.data);
//         loadElements(res.data);
//     })

// const loadElements = (data) => {
//     data.forEach(person => {
//         createBox(person);
//     });
// }

// const createBox = ({name, email, empresa, cpf}) => {
//     const box = document.createElement('DIV');
//     const info = document.createElement('DIV');
    
//     box.classList.add('flex', 'flex-col', 'bg-red-300', 'justify-center', 'gap-2', 'p-8', 'rounded-2xl');
//     const nameP = criaP(name);
//     const emailP = criaP(email);
//     const empresaP = criaP('Empresa: ' + empresa);
//     const cpfP = criaP('Cpf: ' + cpf);

//     box.appendChild(nameP);
//     box.appendChild(emailP);
//     info.appendChild(empresaP);
//     info.appendChild(cpfP);
//     box.appendChild(info);

//     addTheDom(box);
// }

// function criaP(content) {
//     const p = document.createElement('P');
//     p.textContent = content;

//     return p;
// }

// function addTheDom(html) {
//     const box = document.getElementById('people');

//     box.appendChild(html);
// }

// fetch('./pessoas.json')
//     .then(res => res.json())
//     .then(data => loadElements(data));

axios('./pessoas.json')
    .then(res => loadElements(res.data));


    
    const loadElements = (data) => {
     // Cria a tabela
    const table = createTable(data);
    
    // Adiciona a tabela ao DOM
    addTheDom(table);
}

const createTable = (data) => {
    

    const table = document.createElement('table');
    table.classList.add('table-auto', 'w-full', 'border-collapse');  // Adiciona algumas classes de estilo (opcional)
    
    // Cria o cabeçalho da tabela
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    const headers = ['Nome', 'Email', 'Empresa', 'Salario', 'Estado', 'Idade', 'Sexo', 'CPF'];
    
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        th.classList.add('border', 'px-4', 'py-2');
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Cria o corpo da tabela
    const tbody = document.createElement('tbody');
    
    data.forEach(person => {
        const row = createTableRow(person);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    
    return table;
}

const createTableRow = ({nome, email, salario, estado, empresa, idade, sexo, cpf}) => {
    const row = document.createElement('tr');
    
    // Para cada dado da pessoa, cria uma célula na linha
    const data = [nome, email, empresa, salario, estado, idade, sexo, cpf];
    
    data.forEach(dado => {
        const td = document.createElement('td');
        td.textContent = dado;
        td.classList.add('border', 'px-4', 'py-2');
        row.appendChild(td);
    });

    return row;
}

function addTheDom(table) {
    const container = document.getElementById('people');  // Supondo que o contêiner tenha o id "people"
    container.appendChild(table);  // Adiciona a tabela ao contêiner
}
