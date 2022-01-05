const express = require('express')
const router = express.Router()

router.post('/book',require('../controller/bookController'))

module.exports = router