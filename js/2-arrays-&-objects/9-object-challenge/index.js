const library = [
    {
        title: 'Harry potter e o livro filosofico',
        author: 'Author 1',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Book Name 2',
        author: 'Author 2',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Book Name 3',
        author: 'Author 3',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

console.log(library);

// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

library.forEach(book => {
    book.status.read = true;
})

console.log(library);

// const { title: firstBook } = library[0];
const { title: firstBook, status: { own: possui }} = library[0];
// console.log(firstBook);

if (possui === true) {
    console.log(`Nome do livro: ${firstBook} -> Tenho na minha biblioteca`);
} else { 
    console.log(`Nome do livro: ${firstBook} -> Não tenho na minha biblioteca`);
}

// console.log(firstBook, possui);



const objLibrary = JSON.stringify(library);

console.log(objLibrary);
