import {BookModel, MagazineModel, AgencyInterface, PublisherInterface} from './interfaces';

abstract class Article {
    private createdAt: Date;
    private author: string;

    constructor(author: string) {
        this.createdAt = new Date();
        this.author = author;
    }

    getCreatedDate(): Date {
        console.log(this.createdAt);

        return this.createdAt;
    }

    getAuthor(): string {
        console.log(this.author);

        return this.author;
    }

    abstract getTitle(): string;
}

class Book extends Article implements PublisherInterface {
    private publisher: string;
    private title: string;

    constructor(data:BookModel) {
        super(data.author);

        this.publisher = data.publisher;
        this.title = data.title;
    }

    getTitle(): string {
        console.log(this.title);

        return this.title;
    }

    getPublisher(): string {
        console.log(this.publisher);

        return this.publisher;
    }
}


class Magazine extends Article implements AgencyInterface {
    private agency: string;
    private title: string;

    constructor(data:MagazineModel) {
        super(data.author);

        this.agency = data.agency;
        this.title = data.title;
    }

    getTitle(): string {
        console.log(this.title);

        return this.title;
    }

    getAgency(): string {
        console.log(this.agency);

        return this.agency;
    }
}

class Store<T> {
    private storage: T[];

    constructor(storage: any[]) {
        this.storage = storage;
    }

    add(item: any): void {
        this.storage.push(item);
    }

    remove(item: any): void {
        let index = this.storage.findIndex((value) => value === item);

        this.storage.splice(index, 1);
    }

    first(): T {
        let el = this.storage[0];

        console.log(el);

        return el;
    }

    last(): any {
        let el = this.storage[this.storage.length - 1];

        console.log(el);

        return el;
    }

    each(cb): void {
        this.storage.forEach(cb);
    }
}

let bookData1    = {title: "Awesome Book", author: "Will Smith", publisher: 'NY Times'};
let bookData2    = {title: "The Dark Tower", author: "Stephen King", publisher: 'They never sleep'};
let bookData3    = {title: "Neuromancer", author: "William Gibson", publisher: 'NoName'};
let magazineData = {title: "Great Article", author: "John Trump", agency: 'INC co'};

const book1 = new Book(bookData1);
const book2 = new Book(bookData2);
const book3 = new Book(bookData3);

book2.getPublisher();
book2.getCreatedDate();
book2.getAuthor();
book2.getTitle();

const magazine = new Magazine(magazineData);

magazine.getAgency();
magazine.getCreatedDate();
magazine.getAuthor();
magazine.getTitle();

const store = new Store<Book>([book1]);

store.add(book2);
store.add(book3);
store.remove(book2);
store.first();
store.last();
store.each(function (el) {
    console.log(el.title.toUpperCase());
});

console.log(store);

store.first();
