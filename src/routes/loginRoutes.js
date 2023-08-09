const router = require('express').Router()

const { renderLogin, loginUser } = require('../controllers/loginController');

router.get('/', renderLogin)
router.post('/', loginUser);

module.exports = router;