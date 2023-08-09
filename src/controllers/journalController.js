const renderTemplate = require('../lib/renderTemplate')
const Journal = require('../views/Journal')
const { Nutrition } = require('../../db/models');

const renderJournal = async (req, res) => {
  const user = req.session?.user;
  const userId = req.session?.user_id;
  try {
    const dishes = await Nutrition.findAll({ where: {
      user_id: userId,
    }});
    renderTemplate(Journal, { user, dishes }, res);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {renderJournal}