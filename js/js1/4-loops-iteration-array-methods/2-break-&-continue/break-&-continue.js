// break
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        console.log(i + '\nParando..');
        break;
    }

    console.log(i);

}

// continue
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log('pulando');
        continue;
    }

    console.log(i);

}