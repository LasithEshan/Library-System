const express = require('express');
const router = express.Router();
const Book = require('../models/books');
const passport = require('passport');
const jwt = require('jsonwebtoken');





router.get("/load",(req, res, next) => {

  const books  = [
    {isbn:'44646',
      name:'serverbook',
      author: 'server',
      description:'This is a server book',
      imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65GN2HSrJOKvWnaE0yoGcbn9KbUM0jGTePqGCc8TO8VMjY8iH',
      copiesAvailable:5
    },
    {isbn:'446d2446',
      name:'serverbook2',
      author: 'server',
      description:'This is a server book',
      imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65GN2HSrJOKvWnaE0yoGcbn9KbUM0jGTePqGCc8TO8VMjY8iH',
      copiesAvailable:3
    }, {isbn:'446dsa46',
      name:'serverbook3',
      author: 'server',
      description:'This is a server book',
      imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65GN2HSrJOKvWnaE0yoGcbn9KbUM0jGTePqGCc8TO8VMjY8iH',
      copiesAvailable:5
    }
  ];

  res.status(200).json({
    message:'success',
    serverBooks: books
  });
});

router.post('/addBook', (req, res, next) => {

  let newBook = new Book({
    isbn: req.body.isbn,
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
    imagePath: req.body.imagePath,
    copiesAvailable: req.body.copiesAvailable,
    dateAdded: req.body.dateAdded

  });
  Book.addBook(newBook, (err, book)=> {

    if(err){
      res.json({
        success: false,
        message: 'failed to add book'
      });
      console.log(err);
    }else {
      res.json({
        success: true,
        message: 'book added'
      });
      console.log(newBook);
    }
  })
})


module.exports = router;
