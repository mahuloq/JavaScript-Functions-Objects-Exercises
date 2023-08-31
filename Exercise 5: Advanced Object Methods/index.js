let library = {
  books: [],
};

addBook = (name) => {
  library.books.push(name);
};

rmvBook = (name) => {
  bookPos = library.books.indexOf(name);
  console.log(bookPos);

  library.books.splice(bookPos, 1);
};
