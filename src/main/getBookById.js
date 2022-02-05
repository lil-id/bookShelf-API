const bookShelf = require('../bookshelf');

const getBookByIdHandler = (request, h) => {
  const { bookId } = request.params;

  // eslint-disable-next-line no-shadow
  const book = bookShelf.filter((n) => n.id === bookId)[0];

  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { getBookByIdHandler };
