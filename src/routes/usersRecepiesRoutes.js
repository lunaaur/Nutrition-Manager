const router = require('express').Router();
const { renderRecepies } = require('../controllers/usersrecepiesController');

router.get('/', renderRecepies)

module.exports = router;