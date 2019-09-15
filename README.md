# NodeJs_RestAPI
https://help.github.com/en/articles/changing-a-remotes-url

Basic NodeJS REST API

- create directory for api - mkdir nodejs_restapi
- npm init inside the directory “nodejs_restapi” (we can use atom text edit with terminal)
- after npm init, it will create package.json under “nodejs_restapi”
- Execute npm install express in terminal
- Create new file app.js

const express = require('express')
const app = express()
const morgan = require('morgan') //use to log every transaction we made from the browser


app.use(morgan('combined'))

//response to our root route
app.get("/", (req, res) => {
  	console.log("Responding to root route")
  	res.send("Hello from ROOOOT")
})

//sample get users
app.get("/users", (req, res) => {
  	var user1 = {firstName: "Stephen", lastName: "Curry"}
  	const user2 = {firstName: "Kevin", lastName: "Durant"}
  	res.json([user1, user2])
  	//res.send("Nodemon auto updates when i save this file")
})

// localhost:3003
app.listen(3003, () => {
  	console.log("Server is up and listening on 3003...")
})

- Install xampp via home brew (brew cask install xampp)
    - Then start the mysql database and apache web server

  (i = install, -g = global)
- sudo npm i -g nodemon
    - Use to watch our changes to the app.js and then restart the server
- sudo npm i mysql

- use router to clean up our app.js file
- and separate our request for particular usage
const router = require('./routes/user.js')
app.use(router)
