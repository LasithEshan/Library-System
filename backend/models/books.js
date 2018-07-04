const mongoose =  require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');

const bookSchema = mongoose.Schema({
  isbn: {type: String},
  name:{type: String},
  author: {type: String},
  description: {type: String},
  imagePath: String,
  copiesAvailable: {type: String},
  dateAdded: {type: Date}

});

const Book = module.exports = mongoose.model('Book', bookSchema);

module.exports.getBookByIsbn = function (isbn, callback) {
    Book.findById(id, callback);
}

module.exports.getBookByName = function (bookName, callback) {
  const query =  {bookName: bookName}
  Book.findOne(query, callback);
}

module.exports.addBook = function (newBook, callback) {

  newBook.save(callback);
}
