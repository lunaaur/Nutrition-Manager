const router = require('express').Router();

const { renderPage } = require('../controllers/layoutController')

router.get('/', renderPage);

router.get('/logout', async (req, res) => {
  try {
    if (req.session.user) {
      req.session.destroy(() => {
        res.clearCookie('Cookie');
        res.redirect('/home');
      });
    } else {
      res.redirect('/home');
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;