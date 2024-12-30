 let name = 'john';
 let age = 30;

 let person = {
    name: 'Brad',
    age: 40
 }

 let newName = name;
 newName = 'jonathan';
 
let newPerson = person;


 document.getElementById('person1').innerHTML = newPerson.name;
console.log(person);

newPerson.name = 'Bradley';
document.getElementById('person').innerHTML = newPerson.name;
console.log(person);