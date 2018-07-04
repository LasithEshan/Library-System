const express = require('express');
const routers = express.Router();
const User = require('../models/users');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

routers.post('/register', (req, res, next) => {
  let newUser = new User({
    username: req.body.username,
    name: req.body.name,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({
        success: false,
        message: 'failed to add user'
      });
    }else {
      res.json({
        success: true,
        message: ' user added'
      });
    }
  });
});

routers.post('/authenticate', (req,res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByName(username, (err, user) => {
    if(err) throw  err;
    if(!user){
      return res.json({
        successful: false,
        message: 'user not found'
      });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;

      if(isMatch){
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 3600
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username
          }
        })
      }else {
        return res.json({
          successful: false,
          message: 'wrong password'
        });
      }

    });
  });
});

routers.get('/profile', passport.authenticate('jwt', {session: false}), (req,res, next) => {
  res.json({
    user: req.user
  });
})

module.exports = routers;
