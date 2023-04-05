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
  let read = document.querySelector('#status').value;

  let newBook = new Book(title, author, read);
  myLibrary.push(newBook);
  render();
}

function render() {
  let libraryContainer = document.querySelector('.library-grid');
  libraryContainer.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement('div');
    bookEl.classList.add('book-container');
    bookEl.innerHTML = `
      <h2 class="book-title">${book.title}</h2>
      <p class="book-author">${book.author}</p>
      <p class="status">${book.read}</p>`;
    libraryContainer.appendChild(bookEl);
  }
}