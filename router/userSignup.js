const express = require('express')
const router = express.Router();

router.post('/signup',require('../controller/signupController'))

module.exports = router;