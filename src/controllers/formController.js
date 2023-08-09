const renderTemplate = require('../lib/renderTemplate');
const Form = require('../views/Form');
const {Nutrition} = require('../../db/models')

const renderForm = (req, res) => {
  const user = req.session?.user;
  renderTemplate(Form, { user }, res);
};

const createRecipe = async (req, res) => {
  const user_id = req.session?.user_id;
  console.log(user_id, 'ID')
  try {
    const { date, period, name, calories } = req.body;
    let dishes = await Nutrition.create({ date, period, name, calories });
    dishes = await Nutrition.update({ user_id }, {
      where: {
        user_id: null,
      },
    });
    res.redirect('/journal');
  } catch (error) {
    console.log(error, 'cant send');
  }
};

module.exports = { renderForm, createRecipe };
