const router = require('express').Router();
const {renderForm, registerUser} = require('../controllers/registerController')

router.get('/', renderForm)
router.post('/', registerUser)

module.exports = router;