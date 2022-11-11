
const home = function (req, res) {
  res.render('home');
}

const login = function (req, res) {
  res.render('login');
}
// eslint-disable-next-line
module.exports = { home, login };