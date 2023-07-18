const router = require('express').Router();
const { sendCall } = require('../controllers/send-call');

router.post('/', sendCall);

module.exports = router;