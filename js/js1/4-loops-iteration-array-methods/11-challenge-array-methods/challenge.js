const people = [
    {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        age: 20
    },
    {
        firstname: "Jane",
        lastname: "Smith",
        email: "jane.smith@example.com",
        phone: "234-567-8901",
        age: 25
    },
    {
        firstname: "Alice",
        lastname: "Johnson",
        email: "alice.johnson@example.com",
        phone: "345-678-9012",
        age: 24
    },
    {
        firstname: "Bob",
        lastname: "Brown",
        email: "bob.brown@example.com",
        phone: "456-789-0123",
        age: 18
    },
    {
        firstname: "Charlie",
        lastname: "Davis",
        email: "charlie.davis@example.com",
        phone: "567-890-1234",
        age: 32
    },
    {
        firstname: "Diana",
        lastname: "Miller",
        email: "diana.miller@example.com",
        phone: "678-901-2345",
        age: 27
    },
    {
        firstname: "Eve",
        lastname: "Wilson",
        email: "eve.wilson@example.com",
        phone: "789-012-3456",
        age: 29
    },
    {
        firstname: "Frank",
        lastname: "Moore",
        email: "frank.moore@example.com",
        phone: "890-123-4567",
        age: 33
    }
]

const youngPeople = people.filter(person => person.age <= 25).map(person => {
    return {
        name: person.firstname + ' ' + person.lastname,
        email: person.email,
        age: person.age
    }
});

console.log(youngPeople);


const randomNumbers = [34, -23, 45, -12, 67, -89, 23, -56, 78, -34];

const positiveSum = randomNumbers.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);

console.log(positiveSum);

const words = ['coder', 'programmer', 'developer', 'engineer', 'designer', 'teacher', 'doctor', 'nurse', 'artist', 'musician']; 

// const capitalizeWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));    
const capitalizeWords = words.map(word => word[0].toUpperCase() + word.slice(1, word.length -1) + word[word.length - 1].toUpperCase());    

console.log(capitalizeWords);