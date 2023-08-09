const Journal = require('../views/Journal');
const { Nutrition } = require('../../db/models');

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.body
    await Nutrition.destroy({where: { id }})
    res.sendStatus(200)
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
}

module.exports = {deleteRecipe}
