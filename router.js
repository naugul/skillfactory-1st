const express = require('express')
const router = express.Router()

const cartController = require('./controllers/cartController')
const productController = require('./controllers/productController')
const userController = require('./controllers/userController')
const dates = require('./middlewares/dates')
const errorHandler = require('./middlewares/errorHandler')


router.get('/products', [dates.logRequest], productController.getAllProducts)
router.get('/products/categories', [dates.logRequest], productController.getAllProductsByCategory)
router.get('/products/:id', [dates.logRequest], productController.getProductById)

router.get('/prices', [dates.logRequest], productController.getProductsByPrice)
router.get('/expensive', [dates.logRequest], productController.getMostExpensiveFromCategory)
router.get('/products/category/:category', [dates.logRequest], productController.getAllProductsFromCategory)

router.get('/carts', [dates.logRequest], cartController.getAllCarts)
router.get('/bigcarts', [dates.logRequest], cartController.getBigCarts)
router.get('/carts/:id', [dates.logRequest], cartController.getCartById)

router.get('/users', [dates.logRequest], userController.getAllUsers)
router.get('/users/firsts', [dates.logRequest], userController.getUsersFirsts)
router.get('/users/:id', [dates.logRequest], userController.getUserById)

router.use(errorHandler.notFound)

module.exports = router