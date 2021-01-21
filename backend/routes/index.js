const express = require('express')
const usersRoute = require('./users')

const router = express.Router()

router.use('/users/', usersRoute)

module.exports = router
