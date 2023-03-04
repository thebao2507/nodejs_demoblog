const express = require('express')
const app = express()
const port = 3001
// route - định tuyến
app.get("/", (req, res) => {res.send('hello my world')})
//commmm
app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})