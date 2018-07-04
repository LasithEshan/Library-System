const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');
const passport = require('passport');

mongoose.connect(config.database);
mongoose.connection.on('connected', ()=> {
  console.log('connected database' + config.database);
});

const app = express();
const books = require('./routes/books');
const users = require('./routes/users');


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*" );
  res.setHeader("Access-Control-Allow-Headers", "origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());

app.use(passport.initialize());

app.use(passport.session());

require('./config/passport')(passport);
app.use('/books', books);

app.use('/users', users);



app.listen(3000, () => {
  console.log('Server started at port 3000');
});




