const todoList = document.getElementById('todo-list');
const todos = todoList.getElementsByTagName('div');
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiUrl + '?_limit=8')
        .then(res => res.json())
        .then((data) => {
            data.forEach(todo => {
                console.log(todo);
                AddTodoToDOM(todo);
            });
        });
}

function AddTodoToDOM(todo) {
    const div = document.createElement('DIV');
    div.textContent = todo.title;
    div.classList.add('item');
    div.setAttribute('data-id', todo.id);

    if (todo.completed) {
        div.classList.add('done');
    }

    todoList.appendChild(div);
}

function completeTask(e) {
    const item = e.target;
    console.log(e.target);

    if (item && item.classList.contains('item')) {
        // const todoId = e.target.getAttribute('data-id');
        const todoId = e.target.dataset.id;
        const completed = e.target.classList.toggle('done');

        updateTodoStatus(todoId, completed);
    }
}

function updateTodoStatus(todoId, completed) {
    fetch(apiUrl + `/${todoId}`, {
        method: 'PUT',
        body: JSON.stringify({
            completed: completed
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data));
}

const createTodo = (e) => {
    e.preventDefault();

    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false,
    }

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            AddTodoToDOM(data);
            e.target.firstElementChild.value = '';
        });

}

const deleteTask = (e) => {
    const item = e.target;

    if (item && item.classList.contains('item')) {
        // const todoId = e.target.getAttribute('data-id');
        const todoId = e.target.dataset.id;

        fetch(apiUrl + `/${todoId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => item.remove());
    }
}



function init() {
    document.addEventListener('DOMContentLoaded', () => {
        todoList.addEventListener('click', completeTask);
        todoList.addEventListener('dblclick', deleteTask);
        document.querySelector('#todo-form').addEventListener('submit', createTodo);
        getTodos();
    });
}

init();
