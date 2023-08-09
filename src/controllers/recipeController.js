const renderTemplate = require('../lib/renderTemplate');
const Recipe = require('../views/Recipe');

const renderForm = (req, res) => {
  const user = req.session?.user;
  renderTemplate(Recipe, {user}, res)
}


module.exports = {renderForm}