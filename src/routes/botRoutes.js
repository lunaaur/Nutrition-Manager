const router = require('express').Router();
const {renderBot} = require('../controllers/botController')

router.get('/',renderBot)

module.exports = router;