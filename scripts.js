let myLibrary = [];

let submitNewBookBtn = document.getElementById('submit-book');

submitNewBookBtn.addEventListener('click', addBookToLibrary);

// Book object constructor
function Book(title, author, read) {
  this.title = title;
  this.author = author; 
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let status = document.querySelector('#status').value;

  let newBook = new Book(title, author, status);
  myLibrary.push(newBook);
  render();
}

function render() {
  let libraryContainer = document.querySelector('.library-grid');
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement('div');
    bookEl.innerHTML = `<p>${book.title}</p>`;
    libraryContainer.appendChild(bookEl);
  }
}