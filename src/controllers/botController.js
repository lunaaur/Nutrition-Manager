const renderTemplate = require('../lib/renderTemplate');
const Bot = require('../views/Bot');

const renderBot = (req, res) => {
  const user = req.session?.user;
  renderTemplate(Bot, {user}, res)
}


module.exports = {renderBot}