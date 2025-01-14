let x;

const firstName = 'John';
const lastName = 'Doe';
// const age = 30;

const person = {
    firstName,
    lastName,
    age: 30,
};

console.log(person.age);

// destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'William',
        age: 20,
    }
}

// const { id, title, user: {name} } = todo;

const { id: todoId, user: { name, age }} = todo;

console.log(todo.user['name']);
console.log(todoId);

// Destructure arrays
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...nums] = numbers;

console.log(first);
console.log(second);
console.log(nums);
console.log(first, second, nums);
