const nomes = [ 'Luiz', 'Otavio', 'Mirando', 'Alice', 'Beatriz', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gabriel'];

// nomes.splice(indice, delete, el1, el2, el3);
// pop

const removidos = nomes.splice(5, 5);
nomes.splice(0, 2, 'William', 'Italia')

console.log(nomes, removidos);
