const express = require('express')
const app = express()
const port = 3000
require("./config/db")
var cors = require('cors')
app.use(express.json());
app.use(cors())
const router = require("./routes/Route")
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use("/", router)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})