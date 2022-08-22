const { getCart, getCarts } = require('../models/carts')
//const products = require('../models/products')

const getAllCarts = async (req, res) => {
    let carts = await getCarts()
    res.status(200).send(carts)
}

const getCartById = async (req, res) => {
    let id = req.params.id
    let cart = await getCart(id)
    res.status(200).send(cart)
}

let cartController = {
    getAllCarts,
    getCartById,
}

module.exports = cartController