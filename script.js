let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${String(this.pages)}, ${this.read===true ? "has been read" : "not read yet"}`;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function renderBookCard() {
    
}

window.addEventListener("load", (event) => {
    let book1 = new Book("The Hobbit", "JRR Tolkien", 304, false);
    let book2 = new Book("Fuzzy Planet", "John Scalzi", 368, true);
    let book3 = new Book("Stick and Rudder", "Wolfgang Langewische", 389, false);
    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);

    console.log(myLibrary);
});
  