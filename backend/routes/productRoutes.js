const express = require('express');
const controller = require('../controller/productController');

const router = express.Router();

router.post('/addProduct',controller.createProduct);

router.get('/getProduct', controller.readProduct);

router.put('/updateProduct', controller.updateProduct);

router.delete('/deleteProduct',controller.deleteProduct);

module.exports = router;