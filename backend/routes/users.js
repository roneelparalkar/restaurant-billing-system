const express = require('express')
const { usersController } = require('./../controller/')

const router = express.Router()

router.post('/add', (req, res) => {
  console.log(req.body)
  usersController.addUser()
})

router.get('/delete', (req, res) => {
  console.log(req.query.companyId, req.query.userName)
  usersController.deleteUser(req.query.companyId, req.query.userName)
})

router.get('/deactivate', (req, res) => {
  console.log(req.query.companyId, req.query.userName)
  usersController.deactivateUser(req.query.companyId, req.query.userName)
})

router.get('/list', (req, res) => {
  usersController.loginUser(req.query.companyId, req.query.userName)
})

router.get('/login', (req, res) => {
  console.log(req.query.companyId, req.query.userName)
  usersController.loginUser(req.query.companyId, req.query.userName)
})

module.exports = router
