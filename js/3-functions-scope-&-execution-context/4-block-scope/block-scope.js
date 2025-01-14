const x = 100;

if(true) {
    const y = 200;
    console.log(x + y);
    
}

// console.log(x + y);



let base = 10;


for (let i = 1; i <= base; i++) {
    let linha = '';

    for (let j = 1; j <= i; j++) {
        linha += " * "; 
    }

    console.log(linha);
    
}

console.log('------------');
console.log(' ');



for (let i = 1; i <= base; i++) {
    let linha = '';

    for (let j = 1; j <= base; j++) {
        if (j < base){
            linha += " * ";
        } else {
            linha += " A ";
        }
    }

    console.log(linha);
    
}