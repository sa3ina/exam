const express = require("express")
const router = express.Router()
const Controller = require("../controller/Controller")
router.get("/products", Controller.getall)
router.get("/products/:id", Controller.getById)
router.delete("/products/:id", Controller.deleteID)
router.post("/products", Controller.postNew)

module.exports = router

