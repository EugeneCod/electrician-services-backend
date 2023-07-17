const router = require('express').Router();
const { sendCall } = require('../controllers/send-call');

router.post('/send-call', sendCall);

module.exports = router;