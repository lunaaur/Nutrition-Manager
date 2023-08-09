const router = require('express').Router();
const {checkUser} = require('../middleware/checkUser')
const { renderForm, createRecipe } = require('../controllers/formController');

router.get('/createrecipe', checkUser, renderForm);
router.post('/', checkUser, createRecipe);

module.exports = router;