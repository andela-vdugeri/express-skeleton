require('dotenv').load();
var express = require('express'),
  logger  = require('morgan'),
  bodyParser = require('body-parser'),
  routes = require('./server/routes'),
  db = require('./server/config/database');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

routes(app);

/*connect to databse */
db.connect();
/*send all incoming get requests to frontend framework */
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

/* start the server */
app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
