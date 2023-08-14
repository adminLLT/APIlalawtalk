const express = require('express')

const auth = require('./authen/middleware/auth')
const app = express() ;
const cors = require('cors')
app.use(express.json())

  app.use(cors());

const user = require('./usermanage/index')
const random = require('./random/randomLawyer')
const loginToken = require('./authen/login')


app.use('/lalawtalk',user)
app.use('/lalawtalk',random)

app.use('/lalawtalk',loginToken)


module.exports = app