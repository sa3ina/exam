const Model = require("../models/Model")
const getall = async (req, res) => {
    const posts = await Model.find()
    res.send(posts)
}
const getById = async (req, res) => {
    const posts = await Model.findOne({ id: req.params.id })
    res.send(posts)
}
const deleteID = async (req, res) => {
    await Model.deleteOne({ id: req.params.id })
    res.send()
}
const postNew = async (req, res) => {
    const post = await Model(req.body)
    await post.save()
    res.send(post)
}
module.exports = { getall, getById, deleteID, postNew }