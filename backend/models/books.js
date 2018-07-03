const mongoose =  require('mongoose');

const bookSchema = mongoose.Schema({
  isbn: {type: String, required: true},
  name: {type: String, required: true},
  author: {type: String},
  description: {type: String},
  imagePath: {type: String, default: 'https://marketplace.canva.com/MAB___U-clw/1/0/thumbnail_large/canva-yellow-lemon-children-book-cover-MAB___U-clw.jpg'},
  copiesAvailable:{type: Number},
  dateAdded: {type: Date}

});

module.exports = mongoose.model('Book', bookSchema);
