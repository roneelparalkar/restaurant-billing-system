require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('./routes')

const PORT = process.env.PORT || 8000

const app = express()

// Middlewares
app.use(cors())
app.use(helmet())

// Routes
app.get('/ping', (req, res) => {
  res.send('pong')
})
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`)
})
