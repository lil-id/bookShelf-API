/* eslint-disable no-shadow */
const bookShelf = require('../bookshelf');

const deleteBookByIdHandler = (request, h) => {
  const { bookId } = request.params;

  const index = bookShelf.findIndex((bookShelf) => bookShelf.id === bookId);

  if (index !== -1) {
    bookShelf.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { deleteBookByIdHandler };
