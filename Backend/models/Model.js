
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    desc: String,
    price: String,
    id: String,
    imgSrc: String
})

const Model = mongoose.model("Products", schema)
module.exports = Model