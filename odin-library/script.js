const display = document.querySelector("#display");
const form = document.querySelector(".form");
const mylibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; // true or false
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? "read" : "not read yet"
  }`;
};

function addBookToLibrary(book) {
  mylibrary.push(book);
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

mylibrary.push(book1);
mylibrary.push(
  new Book("The Lord of the Rings", "J.R.R. Tolkien", 1137, false)
);
mylibrary.push(new Book("The Silmarillion", "J.R.R. Tolkien", 365, false));
mylibrary.push(new Book("The Children of Húrin", "J.R.R. Tolkien", 313, false));
mylibrary.push(new Book("The Fall of Gondolin", "J.R.R. Tolkien", 304, false));
mylibrary.push(
  new Book("The History of Middle-earth", "J.R.R. Tolkien", 1200, false)
);

//display books in the library
function displayBooks() {
  display.innerHTML = "";
  for (const book of mylibrary) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `
              <h2>${book.title}</h2>
              <h3>${book.author}</h3>
              <p>${book.pages}</p>
              <button class="toggle-read ${book.read ? "read" : "not-read"}">${
      book.read ? "Read" : "Not Read"
    }</button>
              <button class="remove">Remove</button>`;
    display.appendChild(bookDiv);

    // Add event listener to the toggle-read button
    const toggleReadButton = bookDiv.querySelector(".toggle-read");
    toggleReadButton.addEventListener("click", function () {
      book.read = !book.read;
      toggleReadButton.textContent = book.read ? "Read" : "Not Read";
      // Correctly toggle classes
      if (book.read) {
        toggleReadButton.classList.add("read");
        toggleReadButton.classList.remove("not-read");
      } else {
        toggleReadButton.classList.add("not-read");
        toggleReadButton.classList.remove("read");
      }
    });
  }
}

displayBooks();

form.addEventListener("submit", function (event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  addBookToLibrary(new Book(title, author, pages, read));
  displayBooks();

  // Clear the form
  event.target.reset();
});

// Remove book from library
display.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove")) {
    const bookDiv = event.target.parentElement;
    const bookTitle = bookDiv.querySelector("h2").textContent;
    const bookIndex = mylibrary.findIndex((book) => book.title === bookTitle);
    mylibrary.splice(bookIndex, 1);
    displayBooks();
  }
});
