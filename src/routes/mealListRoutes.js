const router = require('express').Router();
const {renderMealList} = require('../controllers/mealListController')

router.get('/', renderMealList)

module.exports = router;