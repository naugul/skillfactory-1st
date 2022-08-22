const { getCart, getCarts } = require('../models/carts')
const { getUser } = require('../models/users')
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

const getBigCarts = async (req, res) => {
    let carts = await getCarts()
    let bigCarts = carts.filter(cart => cart.products.length > 2)
    let userCarts = bigCarts.map(async cart => {
        let userId = await getUser(cart.userId)
        return {
            user: userId.username,
            cart: cart
        }
    })
    Promise.all(userCarts).then(data => res.status(200).send(data))
}

let cartController = {
    getAllCarts,
    getCartById,
    getBigCarts
}

module.exports = cartController