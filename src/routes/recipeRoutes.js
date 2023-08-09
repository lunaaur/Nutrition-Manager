const router = require('express').Router();
const {checkUser} = require('../middleware/checkUser')

const {renderForm} = require('../controllers/recipeController')

router.get('/',renderForm)

module.exports = router;