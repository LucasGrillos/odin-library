let myLibrary = [];

const newBookForm = document.getElementById("add-book-form");
newBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addNewBook();
});

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

function clearLibrary() {
    let libraryDiv = document.querySelector(".library");
    if (libraryDiv.firstChild) {
        while(libraryDiv.firstChild) {
            libraryDiv.firstChild.remove()
        }
    }
}

function createBookElement(book) {
    let libraryDiv = document.querySelector(".library");
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

    deleteButton.addEventListener('click', function() {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        renderLibrary();
    });
    
    libraryDiv.appendChild(card);
}

function renderLibrary() {
    clearLibrary();
    myLibrary.forEach(book => {
        createBookElement(book);
    })
}

function addNewBook() {
    let bTitle = document.getElementById("btitle").value;
    let bAuthor = document.getElementById("bauthor").value;
    let bPages = document.getElementById("bpages").value;
    let bRead = document.getElementById("bread").checked;

    let newBook = new Book(bTitle, bAuthor, bPages, bRead);
    addBookToLibrary(newBook);
    renderLibrary()
}

window.addEventListener("load", (event) => {
    let book1 = new Book("The Hobbit", "JRR Tolkien", 304, false);
    let book2 = new Book("Fuzzy Planet", "John Scalzi", 368, true);
    let book3 = new Book("Stick and Rudder", "Wolfgang Langewische", 389, false);
    let book4 = new Book("A Wrinke in Time", "Madeleine L'Engle", 256, true)
    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
    addBookToLibrary(book4);

    renderLibrary()
});
