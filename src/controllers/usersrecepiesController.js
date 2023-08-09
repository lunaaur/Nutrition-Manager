const renderTemplate = require('../lib/renderTemplate');
const UsersRecepies = require('../views/UsersRecepies');
const { Nutrition } = require('../../db/models');

const renderRecepies = async (req, res) => {
  const user = req.session?.user;
  try {
    const dishes = await Nutrition.findAll();
    renderTemplate(UsersRecepies, { user, dishes }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderRecepies };
