const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/MainPage');

const renderHome = async (req, res) => {
  const user = req.session?.user;
  try {
    renderTemplate(Home, {user}, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderHome };