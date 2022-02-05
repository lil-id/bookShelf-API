/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
const addBook = require('./main/addBookInShelf');
const getAllBook = require('./main/getAllBookInShelf');
const getBookById = require('./main/getBookById');
const editBookById = require('./main/editBookInShelf');
const deleteBookById = require('./main/deleteBook');

const { addBookHandler } = addBook;
const { getAllBookHandler } = getAllBook;
const { getBookByIdHandler } = getBookById;
const { editBookByIdHandler } = editBookById;
const { deleteBookByIdHandler } = deleteBookById;

module.exports = {
  addBookHandler,
  getAllBookHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
};
