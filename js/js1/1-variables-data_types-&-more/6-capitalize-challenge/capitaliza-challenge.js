const mystring = 'developer';

const myNewString = mystring.charAt(0).toUpperCase() + mystring.slice(1);

console.log(myNewString + " charAt, slice"); 

// const myNewStrings = firstLetter + teste;


// console.log(firstLetter);

const myNewString2 = mystring.charAt(0).toUpperCase() + mystring.substring(1);
console.log(myNewString2 + " charAt, Sub");

const myNewString3 = myNewString.split("").map((letter, index) => index === 0 ? letter.toUpperCase() : letter).join("");
console.log(myNewString3 + " Map");


const myStringArray = mystring.split('');
let myNewString4 = '';


myStringArray.forEach((letter, index) => {
    if(index === 0) {
       myNewString4 += letter.toUpperCase();
    } else {
        myNewString4 += letter;
    }
});

console.log(myNewString4 + " for");
