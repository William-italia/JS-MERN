let x;

const person = {
    name: 'john doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[1];

person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

person.great = function() {
    console.log(`Hello my name is ${this.name}`);
}

person.great();

x = person;

console.log(x);
