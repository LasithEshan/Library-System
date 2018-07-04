const mongoose =  require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');

const userSchema = mongoose.Schema({
  username:{type: String},
  name: {type: String},
  password: {type: String}

});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByName = function (username, callback) {
  const query =  {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw  err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });

}

module.exports.comparePassword = function (candidatePassword, hash, callback) {

  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  })

}

