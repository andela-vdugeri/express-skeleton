var mongoose = require('mongoose'),
  DbUrl = process.env.DB_URL;

var db = mongoose.connection;
mongoose.connect(DbUrl);

module.exports  = {
  connect: function () {
    db.on('error', console.error.bind(console, 'Db Connection error. Please ensure mongodb is running\n'));
    db.once('open', function callback() {
      console.log('Application database opened');
    });
  }
}
