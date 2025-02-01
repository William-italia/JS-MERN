
// window.addEventListener('keydown', (e) => {
//     console.log(e.key, e.keyCode, e.code);

//     keys.forEach((key, index) => {
//         if (index === 0) {
//             key.firstChild.textContent = e.key;
//         } 
        
//         if (index === 1) {
//             key.firstChild.textContent = e.keyCode;
//         }
        
//         if (index === 2) {
//             key.firstChild.textContent = e.code;
//         }
//     });

// });

const keys = document.querySelectorAll('.key');
const p = document.querySelector('p');
const container = document.getElementById('insert');

const keymap = {
    0: "key",
    1: "keyCode",
    2: "code"
};




let timeOutId;
let timer = 8000;

// window.addEventListener('keydown', (e) => {
    
//     p.style.display = 'none';
//     container.style.display = 'flex';

    
//     keys.forEach((keyPressed, index) => {
//         let keyvalue = e[keymap[index]];

//         if(e.key === ' ') {
//             keyvalue = 'space';
//         }

//         keyPressed.firstChild.textContent = keyvalue;
//     });
    
//     clearTimeout( timeOutId );
//     timeOutId = setTimeout(resetPreset, timer);

// });


window.addEventListener('keydown', (e) => {
    
    const keyCodes = {
        "e.key": e.key === ' ' ? 'space' : e.key,
        "e.keyCode": e.keyCode,
        "e.code": e.code
    };

    p.style.display = 'none';
    container.style.display = 'flex';
1
    keys.forEach((keyPressed, index) => {
        const keyname = Object.keys(keyCodes)[index];

        

        keyPressed.firstChild.textContent = keyCodes[keyname];
        
    });

    // const keyValue = Object.entries(keyCodes);

    // keyValue.forEach(([chave, valor], index) => {
    //     keys[index].firstChild.textContent = valor;
    // } )

    
    
    clearTimeout( timeOutId );
    timeOutId = setTimeout(resetPreset, timer);

});


function resetPreset() {
    p.style.display = 'block';
    container.style.display = 'none';
}

