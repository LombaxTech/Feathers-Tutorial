const users = require('./users/users.service.js');
const games = require('./games/games.service.js');
const books = require('./books/books.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(games);
  app.configure(books);
};
