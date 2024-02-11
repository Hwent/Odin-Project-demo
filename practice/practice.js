const createBook = (title, author, page) => {
  const info = () => {
    return `Title: ${title}, Author: ${author}, Page: ${page}`;
  };

  return {
    title,
    author,
    page,
    info,
  };
};

const book = createBook("The Hobbit", "J.R.R. Tolkien", 295);
//console.log(book.info());
// Create a new book object with the same properties as the original book
const newBook = { ...book };

//console.log(newBook.info()); // "Title: The Hobbit, Author: J.R.R. Tolkien, Page: 295"

function Book(title, author, page) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.info = function () {
    return `Title: ${title}, Author: ${author}, Page: ${page}`;
  };
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295);
//console.log(book1.info());

const jump = (nums) => {
  let curr = -1,
    next = 0,
    count = 0;
  for (let i = 0; next < nums.length - 1; i++) {
    console.log("i", i, "curr", curr, "next", next, "count", count);
    if (i > curr) {
      count++;
      curr = next;
    }
    next = Math.max(next, nums[i] + i);
  }
  return count;
};

jump([1, 3, 4, 0, 2, 4, 1, 1]);
