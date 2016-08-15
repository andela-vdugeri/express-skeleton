var UserController = require('../controllers/user.controller');

module.exports = function (app) {
  app.post('/users', UserController.new);
  app.get('/users', UserController.index);
  app.get('/users/:id', UserController.find);
  app.put('/users/:id', UserController.update);
  app.delete('/users/:id', UserController.delete);
  app.post('/users/login', UserController.authenticate);
}
