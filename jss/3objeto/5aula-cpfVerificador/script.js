function limpaCpf(cpf) {
    const numeros = cpf.split('-')[0];
    return numeros.replace(/\D/g, '');
}

function multiplicaNumeros(lista, mul) {
    const total = lista.reduce((acc, num, i) => acc + num * (mul - i), 0);
    return descobreDigito(total);
}

function descobreDigito(total) {
    let digito = 11 - (total % 11);
    if(digito >= 10) digito = 0;
    
    return digito;
}

function validaCpf(Cpf) {
    let CpfLimpo = Array.from(limpaCpf(Cpf)).map(Number);

    if (!CpfLimpo || CpfLimpo.length !== 9) return 'Valor Invalido';

    const digito1 = multiplicaNumeros(CpfLimpo, 10)
    const digito2 = multiplicaNumeros([...CpfLimpo, digito1], 11);

    let CpfFinal = [...CpfLimpo, digito1, digito2].join('');
    CpfFinal = CpfFinal.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    console.log(CpfFinal);

    return CpfFinal === Cpf ? 'Valido' : 'Invalido';
}

console.log(validaCpf('070.987.720-03'));

// 705.484.450-52 070.987.720-03
/*
705.484.450

10->2
11 - (total % 11)

11->2
11 - (total % 11)
*/