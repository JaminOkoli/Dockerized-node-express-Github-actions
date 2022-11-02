
const home = function (req, res) {
  res.render('home');
}

const login = function (req, res) {
  res.render('login');
}

modules.exports = { home, login };