const express = require('express')
const router = express.Router()

const cartController = require('./controllers/cartController')
const productController = require('./controllers/productController')
const userController = require('./controllers/userController')
//const productController = require('./models/products')
const dates = require('./middlewares/dates')
const errorHandler = require('./middlewares/errorHandler')
//const bodyParser = require('body-parser')

function helloWorld(req, res) {
    res.send('Hello World! Its: ' + req.today + ' of ' + req.month)
}

router.use(dates.myDate)
//router.use(bodyParser.json())
router.get('/hello', [dates.today, dates.month], helloWorld)
router.get('/products', [dates.today, dates.month], productController.getAllProducts)

router.get('/products/categories', [dates.today, dates.month], productController.getAllProductsByCategory)

router.get('/products/:id', [dates.today, dates.month], productController.getProductById)


router.get('/products/category/:name', [dates.today, dates.month], productController.getProductsByCategory)
router.get('/prices', [dates.today, dates.month], productController.getProductsByPrice)

router.get('/carts', [dates.today, dates.month], cartController.getAllCarts)
router.get('/carts/:id', [dates.today, dates.month], cartController.getCartById)

router.get('/users', [dates.today, dates.month], userController.getAllUsers)
router.get('/users/firsts', [dates.today, dates.month], userController.getUsersFirsts)
router.get('/users/:id', [dates.today, dates.month], userController.getUserById)

//router.get('/products', productController.getProducts)
//router.post('/product', productController.createProduct)
//router.get('/ghibli', movieController.getRanking)
//router.get('/ghibli/:name', [dates.today, dates.month], movieController.getMovieByName)
//router.get('/ghibli/score/:score', movieController.getMoviesByScore)

router.use(errorHandler.notFound);

module.exports = router;