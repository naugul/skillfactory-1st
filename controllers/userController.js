const { getUser, getUsers, getUsersLimited } = require('../models/users.js')
//const products = require('../models/products')

const getAllUsers = async (req, res) => {
    let users = await getUsers()
    res.status(200).send(users)
}

const getUserById = async (req, res) => {
    let id = req.params.id
    let user = await getUser(id)
    res.status(200).send(user)
}

const getUsersFirsts = async (req, res) => {
    let user = await getUsersLimited()
    res.status(200).send(user)
}

let userController = {
    getAllUsers,
    getUserById,
    getUsersFirsts
}

module.exports = userController