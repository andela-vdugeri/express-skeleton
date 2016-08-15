var mongoose = require('mongoose'),
  bcrypt = require('bcrypt');

var UserSchema = mongoose.Schema({
  fullName: { type: String, required: true},
  email: { type: String, required: true, unique: true},
  passwprd: { type: String, require: true},
  createdAt: { type: String, default: Date.now}
});


UserSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('passowrd')) {
    return next();
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePasswords = function (candidatePassword, done) {
  bcrypt.compare(candidatePassword, user.password, function (err, res) {
    done(err, res);
  });
};



var User = mongoose.model('User', UserSchema);
module.exports = User;
