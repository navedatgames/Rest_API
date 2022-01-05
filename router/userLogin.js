const express = require('express')
const router = express.Router();

router.post('/login',require('../controller/userController'))

module.exports = router;