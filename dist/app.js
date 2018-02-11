"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Article = /** @class */ (function () {
    function Article(author) {
        this.createdAt = new Date();
        this.author = author;
    }
    Article.prototype.getCreatedDate = function () {
        console.log(this.createdAt);
        return this.createdAt;
    };
    Article.prototype.getAuthor = function () {
        console.log(this.author);
        return this.author;
    };
    return Article;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(data) {
        var _this = _super.call(this, data.author) || this;
        _this.publisher = data.publisher;
        _this.title = data.title;
        return _this;
    }
    Book.prototype.getTitle = function () {
        console.log(this.title);
        return this.title;
    };
    Book.prototype.getPublisher = function () {
        console.log(this.publisher);
        return this.publisher;
    };
    return Book;
}(Article));
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(data) {
        var _this = _super.call(this, data.author) || this;
        _this.agency = data.agency;
        _this.title = data.title;
        return _this;
    }
    Magazine.prototype.getTitle = function () {
        console.log(this.title);
        return this.title;
    };
    Magazine.prototype.getAgency = function () {
        console.log(this.agency);
        return this.agency;
    };
    return Magazine;
}(Article));
var Store = /** @class */ (function () {
    function Store(storage) {
        this.storage = storage;
    }
    Store.prototype.add = function (item) {
        this.storage.push(item);
    };
    Store.prototype.remove = function (item) {
        var index = this.storage.findIndex(function (value) { return value === item; });
        this.storage.splice(index, 1);
    };
    Store.prototype.first = function () {
        var el = this.storage[0];
        console.log(el);
        return el;
    };
    Store.prototype.last = function () {
        var el = this.storage[this.storage.length - 1];
        console.log(el);
        return el;
    };
    Store.prototype.each = function (cb) {
        this.storage.forEach(cb);
    };
    return Store;
}());
var bookData1 = { title: "Awesome Book", author: "Will Smith", publisher: 'NY Times' };
var bookData2 = { title: "The Dark Tower", author: "Stephen King", publisher: 'They never sleep' };
var bookData3 = { title: "Neuromancer", author: "William Gibson", publisher: 'NoName' };
var magazineData = { title: "Great Article", author: "John Trump", agency: 'INC co' };
var book1 = new Book(bookData1);
var book2 = new Book(bookData2);
var book3 = new Book(bookData3);
book2.getPublisher();
book2.getCreatedDate();
book2.getAuthor();
book2.getTitle();
var magazine = new Magazine(magazineData);
magazine.getAgency();
magazine.getCreatedDate();
magazine.getAuthor();
magazine.getTitle();
var store = new Store([book1]);
store.add(book2);
store.add(book3);
store.remove(book2);
store.first();
store.last();
store.each(function (el) {
    console.log(el.title.toUpperCase());
});
console.log(store);
//# sourceMappingURL=app.js.map