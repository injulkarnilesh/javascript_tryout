
enum Genre {
    Fiction,
    Philosophy,
    Biography,
    Science
}

function getBooks() {
    return [
        {title : 'Cosmos', author : 'Carl Sagan', available : true, genre : Genre.Science},
        {title : 'The Brothers of karamazov', author : 'Fyodor Dostoyevsky', available : false, genre : Genre.Fiction},
        {title : 'Long walk to freedom', author : 'Nelson Mandela', available : true, genre : Genre.Biography},
        {title : 'On Shortness of life', author : 'Seneca', available : false, genre : Genre.Philosophy }
    ];
}

function logFirstAvailableBook(books) : void {
    let numberOfBooks : number = books.length;
    let firstBookTitle : string = '';

    for (let book of books) {
        if(book.available) {
            firstBookTitle = book.title;
        }
    }

    console.log('Number of books : ' + numberOfBooks);
    console.log('First Available book : ' + firstBookTitle);
}

const books = getBooks();
logFirstAvailableBook(books);


function getBooksByGenre(genre : Genre) : Array<string> {

    console.log('Getting books of type : ' +  Genre[genre]);
    const allBooks = getBooks();
    const matchingBooks : string[] = [];
    for (let book of allBooks) {
        if (book.genre === genre) {
            matchingBooks.push(book.title);
        }
    }

    return matchingBooks;
}

function printBooks(books : string[]) : void {
    for (let title of books) {
        console.log(title);
    }
}

let fictionBooks : string[] = getBooksByGenre(Genre.Fiction);
printBooks(fictionBooks);

