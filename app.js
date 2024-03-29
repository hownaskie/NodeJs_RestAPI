// load our app server using express somehow....
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extented: false}))
app.use(express.static('./public'))
app.use(morgan('short'))

app.get('/', (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOT")
})

//use user.js file as our router for user request
const router = require('./routes/user.js')
app.use(router)

// localhost:3003
const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log("Server is up and listening on: "+PORT)
})
