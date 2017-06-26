
interface Book {
    id : number;
    title : string;
    author : string;
    available : boolean;
    pages? : number;
    markDamaged? : (reason : string) => void;
}


function printBook(book : Book) {
    console.log(book.title + ' by ' + book.author);
}

var duckBook = {
    id : 23,
    title : 'Pride and Prejudice',
    author : 'Jane Austen',
    available : false,
    year : 1930  //Ok to have extra properties
};
printBook(duckBook);

var myBook : Book = {
    id : 34,
    title : 'War and Peace',
    author : 'Leo Tolstoy',
    available : true,
    pages : 1392,
    //year : 1998, cannot have extra property if defined to be of type
    markDamaged : (reason : string) => console.log('Damaged because ' + reason)
};
printBook(myBook);
myBook.markDamaged('Has no back-cover');

