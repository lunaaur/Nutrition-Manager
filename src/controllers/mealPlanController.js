const renderTemplate = require('../lib/renderTemplate');
const MealPlan = require('../views/Meal/MealPlan');
const MealList = require('../views/Meal/MealList')

const renderMealForm = (req, res) => {
  const user = req.session?.user;
  renderTemplate(MealPlan, {user}, res)
}


module.exports = {renderMealForm}