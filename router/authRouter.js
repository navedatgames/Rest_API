const express = require('express')
const router = express.Router();

router.post('/author',require('../controller/authorController'))

module.exports = router;