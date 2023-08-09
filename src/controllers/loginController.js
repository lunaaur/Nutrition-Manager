const bcrypt = require('bcrypt');
const Login = require('../views/Login');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');

const renderLogin = (req, res) => {
  const user = req.session?.user;
 /*  if (req.session.user) {
  res.redirect('/')
  } else { */
    renderTemplate(Login, {user}, res);
/*   } */
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    const passCheck = await bcrypt.compare(password, user.password);

    if (passCheck) {
      req.session.user = user.login;
      req.session.user_id = user.id;
      req.session.save(() => {
        res.redirect('/home');
      });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

module.exports = { renderLogin, loginUser };