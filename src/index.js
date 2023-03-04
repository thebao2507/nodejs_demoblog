const {engine} = require('express-handlebars')
const express = require('express')
const morgan = require("morgan")
const path = require("path")
const app = express()
const port = 3001

// http logerr
app.use(morgan("combined"))

// handlebars
app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))
// route - định tuyến
app.get("/", (req, res) => {res.render('home')})
app.get("/wibu", (req, res) => {res.render('wibu')})
//commmm
app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})