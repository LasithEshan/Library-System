const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*" );
  res.setHeader("Access-Control-Allow-Headers", "origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

app.use("/api/books",(req, res, next) => {

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
})



module.exports = app;

