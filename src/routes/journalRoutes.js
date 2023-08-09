const router = require('express').Router();
const {renderJournal} = require('../controllers/journalController')

router.get('/', renderJournal)

module.exports = router;