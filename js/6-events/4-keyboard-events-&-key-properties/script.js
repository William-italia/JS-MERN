const itemInput = document.querySelector('.input-item');

// itemInput.addEventListener('keypress', (e) => {
//     console.log('keypress');
// });

// itemInput.addEventListener('keyup', (e) => {
//     console.log('keyup');
// });

itemInput.addEventListener('keydown', (e) => {
    // console.log('keydown');
    // key
    // console.log(e.key);
    document.querySelector(`h1`).innerText = e.key;

    if (e.key === 'Enter') {
        // alert('you pressed enter');
    }
    // keycode
    if (e.keyCode === 13) {
        // alert('You pressed enter')
    }

    // code
    // console.log(e.code);
    if(e.code === 'Digit1') {
        // console.log('You pressed one');
        
    }

    if (e.repeat) {
        console.log('You are holding down ' + e.key);    
    }


    console.log('Shift: ' + e.shiftKey);
    console.log('Ctrl: ' + e.ctrlKey);
    

    if (e.shiftKey && e.key === 'K') {
        console.log('You hit shift + K');
    }

});