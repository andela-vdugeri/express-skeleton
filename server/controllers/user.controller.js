var User = require('../models/user');

module.exports = {
  index: function (req, res) {
    User.find({}, function (err, users) {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(users);
    })
  },

  new: function (req, res) {
    var user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password
    });

    user.save().then(function (err, user) {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(user);
    });
  },

  find: function (req, res) {
    User.findById(req.params.id, function (err, res) {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(user);
    });
  },

  update: function (req, res) {
    var updatedUser = {
      fullName: req.body.fullName,
      email: req.body.email
    };

    User.findByIdAndUpdate(req.params.id, updatedUser, { new: true }, function (err, res) {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(updatedUser);
    });
  },

  delete: function(req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
      if(err) {
        return res.status(500).json(err);
      }
      return res.status(200).json({ message: 'User account deleted' });
    });
  },

  authenticate: function (req, res) {
    //TODO: authenticate the user
  }
}
