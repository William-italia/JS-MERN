const path = require('path');
const read = require('./modules/read');
const write = require('./modules/write');

const dados = path.resolve(__dirname, 'data', 'dados.txt');
const dadosJson = path.resolve(__dirname, 'dados.Json');

const carros = path.resolve(__dirname, 'data', 'carros.txt');
const carrosJson = path.resolve(__dirname, 'carros.Json');

async function translateTxtToJson(Arq, pathfile) {
    const content = await read(Arq);
    const dados = JSON.parse(content);
    const json = JSON.stringify(dados, null, 2);
    
    await write(pathfile, json);
    console.log(`Arquivo ${pathfile} criado com sucesso!`);
}

async function imprimeDados(dados, chave) { 
    const content = await read(dados);
    dados = JSON.parse(content);

    dados.forEach(val => console.log(chave ? val[chave] : val))
}

async function main() {
    // await translateTxtToJson(dados, dadosJson);
    // await translateTxtToJson(carros, carrosJson);   
    await imprimeDados(`${__dirname}\\carros.json`, 'modelo');
}


main();



