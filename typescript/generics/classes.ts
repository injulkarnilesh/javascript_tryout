
interface UserList<T> {
    addItem(item:T):void;
    getLatest():T;
    getAll():Array<T>;
}

class WishList<T> implements UserList<T> {
    private items : Array<T>;

    constructor() {
        this.items = new Array<T>();
    }

    addItem(item:T) {
        this.items.push(item);
    }

    getLatest():T {
        if (this.items.length) {
            return this.items[this.items.length - 1];
        }
    }

    getAll():Array<T> {
        let list : Array<T> = new Array<T>();
        this.items.forEach(item => list.push(item));
        return list;
    }
}

interface Titled {
    title : string;
}

class Book implements Titled{
    constructor(public title : string, public author : string) {

    }
}

let shelf : WishList<Book> = new WishList<Book>();
shelf.addItem(new Book('Astrophysics for People in a Hurry', 'Neil deGrasse Tyson'));
shelf.addItem(new Book('The Fellowship of the Ring', 'J.R.R. Tolkien'));
console.log(shelf.getLatest());
console.log(shelf.getAll());

let luckyNumbers : WishList<number> = new WishList<number>();
luckyNumbers.addItem(10);
luckyNumbers.addItem(27);
luckyNumbers.addItem(2);
console.log(luckyNumbers.getLatest());
console.log(luckyNumbers.getAll());


class Shelf<T extends Titled> extends WishList<T> {
    find(title : string) : T {
        let matching : T[] = this.getAll().filter(item => item.title === title);
        if (matching.length) {
            return matching[0];
        }
        return null;
    }
}

let myFictionShelf : Shelf<Book> = new Shelf<Book>();
myFictionShelf.addItem(new Book('The Fellowship of the Ring', 'J.R.R. Tolkien'));
myFictionShelf.addItem(new Book('The Two Towers', 'J.R.R. Tolkien'));
myFictionShelf.addItem(new Book('The Return of the King', 'J.R.R. Tolkien'));
console.log(myFictionShelf.getAll());
console.log(myFictionShelf.find('On Shortness Of Life'));
console.log(myFictionShelf.find('The Fellowship of the Ring'));