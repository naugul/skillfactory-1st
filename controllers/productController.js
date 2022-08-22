const { getProduct, getProducts, getCategories, getProductsByCategory } = require('../models/products')
//const products = require('../models/products')

const getAllProducts = async (req, res) => {
    let products = await getProducts()
    res.status(200).send(products)
}

const getAllCategories = async (req, res) => {
    let categories = await getCategories()
    res.status(200).send(categories)
}

const getAllProductsFromCategory = async (req, res) => {
    let category = req.params.category
    let products = await getProductsByCategory(category)
    res.status(200).send(products)
}

const getProductById = async (req, res) => {
    let id = req.params.id
    let product = await getProduct(id)
    res.status(200).send(product)
}

const getAllProductsByCategory = async (req, res) => {
    let categories = await getCategories()
    let productsByCategories = categories.map(async category => {
        return {
            category: category,
            products: await getProductsByCategory(category)
        }
    })
    Promise.all(productsByCategories).then(data => res.status(200).send(data))
}

const getMostExpensiveFromCategory = async (req, res) => {
    let categories = await getCategories()
    let productsByCategories = categories.map(async category => {
        let productsByCategory = await getProductsByCategory(category)
        let sortedProductsByCategory = productsByCategory.sort((a,b) => b.price - a.price)
        return sortedProductsByCategory[0]
    })
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
    getProductsByPrice,
    getMostExpensiveFromCategory,
    getAllProductsFromCategory
}

module.exports = productController