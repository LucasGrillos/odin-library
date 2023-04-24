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

function renderLibrary() {
    let libraryDiv = document.querySelector(".library");
    myLibrary.forEach(book => {
        let card = document.createElement("div")
        card.className = "card";
        
        let bookInfo = document.createElement("div");
        bookInfo.className = "book-information"
        card.appendChild(bookInfo);
        
        let bookTitle = document.createElement("div");
        bookTitle.className = "book-title";
        bookTitle.textContent = `${book.title}`;
        bookInfo.appendChild(bookTitle);

        let bookAuthor = document.createElement('div');
        bookAuthor.className = "author";
        bookAuthor.innerHTML = `by <span>${book.author}</span>`;
        bookInfo.appendChild(bookAuthor);
        
        let bookPages = document.createElement("div");
        bookPages.className = "page-count";
        bookPages.textContent = `Pages: ${String(book.pages)}`;
        bookInfo.appendChild(bookPages);

        let readSection = document.createElement("div");
        readSection.className = "read-and-delete";
        card.appendChild(readSection);

        let readButton = document.createElement("button");
        readButton.className = (book.read == true ? 'read' : 'unread');
        readButton.textContent = (book.read == true ? 'Read' : 'Unread');
        readSection.appendChild(readButton);
        
        let deleteButton = document.createElement('button');
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        readSection.appendChild(deleteButton);
        
        libraryDiv.appendChild(card);
    })
}

window.addEventListener("load", (event) => {
    let book1 = new Book("The Hobbit", "JRR Tolkien", 304, false);
    let book2 = new Book("Fuzzy Planet", "John Scalzi", 368, true);
    let book3 = new Book("Stick and Rudder", "Wolfgang Langewische", 389, false);
    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);

    renderLibrary()
});
  