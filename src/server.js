const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

const sequelize = require('./config/database')
const { Router } = require('./routes/index')

const { errorHandlingMiddleware } = require('./middlewares/errorHandling')
const port = process.env.PORT || 3000

// tables
// require('./models/user')
// require('./models/course')
// require('./models/class')
// require('./models/enrollment')
// require('./models/score')
// require('./models/notification')
// require('./models/test')
// require('./models/deadline')
// require('./models/note')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', Router)

app.use(errorHandlingMiddleware)


app.get('/', (req,res) => {
  res.send('<h1> Hello World </h1>')
})
sequelize
  .sync()
  .then(() => app.listen(port, () => console.log(`listen on port ${port}`)) )
  .catch(err => {throw new Error(err)})
