const router = require('express').Router();
const {checkUser} = require('../middleware/checkUser')

const { deleteRecipe } = require('../controllers/manageController');

router.delete('/:id',checkUser, deleteRecipe);


module.exports = router;