function createPost({ title, body }) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body
        // title,
        // body
        }),
        headers: {
            'Content-Type': 'application/json',
            Hello: 'World',
            token: 'abc123'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data));
}

createPost({title: 'A Bunda', body: 'BUNDA'});