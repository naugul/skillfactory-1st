const { getProduct, getProducts, getCategories, getProductsByCategory } = require('../models/products')
const products = require('../models/products')

const getAllProducts = async (req, res) => {
    let products = await getProducts()
    res.status(200).send(products)
}

const getAllCategories = async (req, res) => {
    let categories = await getCategories()
    res.status(200).send(categories)
}

const getProductById = async (req, res) => {
    let id = req.params.id
    let product = await getProduct(id)
    console.log(`User requested product with id ${id} at day ${req.today}`)
    res.status(200).send(product)
}

const getAllProductsByCategory = async (req, res) => {
    let categories = await getCategories()
    let productsByCategories = categories.map(async category => {
        return await getProductsByCategory(category)
    });
    Promise.all(productsByCategories).then(data => res.status(200).send(data))
}

const getProductsByPrice = async (req, res) => {
    let sort = req.query.order
    let products = await getProducts()
    let list = products.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price
    }))
    if (sort === 'desc') {
        list.sort((a,b) => b.price - a.price)
    } else {
        list.sort((a,b) => a.price - b.price)
    }
    res.status(200).send(list)
}

let productController = {
    getAllProducts,
    getAllCategories,
    getProductById,
    getProductsByCategory,
    getAllProductsByCategory,
    getProductsByPrice
}

module.exports = productController