let myLibrary = [];

const submitNewBookBtn = document.getElementById('submit-book');
const bookContainer = document.querySelector('.library-grid');

submitNewBookBtn.addEventListener('click', addBookToLibrary);
bookContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-image')) {
    deleteBook();
  }
});

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let read = document.querySelector('#status').value;

  let newBook = new Book(title, author, read);
  myLibrary.push(newBook);
  render();
}

class Book{
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

function render() {
  let libraryContainer = document.querySelector('.library-grid');
  libraryContainer.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement('div');
    bookEl.classList.add('book-container');
    if (book.read == 'Read') {
      bookEl.innerHTML = `
      <h2 class="book-title">${book.title}</h2>
      <p class="book-author">${book.author}</p>
      <div class="book-options-container">
          <div>
            <select name="status" id="added-book-status">
              <option value="read" selected>Read</option>
              <option value="not read">Not Read</option>
            </select>
          </div>
          <img class="delete-image" src="trash-can.svg">
      </div>`;
    } else {
      bookEl.innerHTML = `
      <h2 class="book-title">${book.title}</h2>
      <p class="book-author">${book.author}</p>
      <div class="book-options-container">
          <div>
            <select name="status" id="added-book-status">
              <option value="read">Read</option>
              <option value="not read" selected>Not Read</option>
            </select>
          </div>
          <img class="delete-image" src="trash-can.svg">
      </div>`;
    }
    libraryContainer.prepend(bookEl);
  }
}

function deleteBook() {
  event.target.parentNode.parentNode.remove();
}