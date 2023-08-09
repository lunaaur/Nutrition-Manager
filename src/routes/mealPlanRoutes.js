const router = require('express').Router();
const {renderMealForm} = require('../controllers/mealPlanController')

router.get('/', renderMealForm)

module.exports = router;