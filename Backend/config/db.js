const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://bd6zv16m3:bduexam@bduexam.xlfcijk.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("connected to mongodb")).catch((err) =>
    console.log("err", err)
)