const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Registration = require('../views/Registration');
const {User} = require('../../db/models')

const renderForm = (req, res) => {
  renderTemplate(Registration, null, res)
}

const registerUser = async (req, res) => {
  try {
    const { email, login, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, login, password: hash })
    req.session.user = user.login;
    req.session.user_id = user.id; 
    req.session.save(() => {
      res.redirect('/')
    });
  } catch (error) {
    console.log(error, 'cant render');
  }
};

module.exports = {renderForm, registerUser}