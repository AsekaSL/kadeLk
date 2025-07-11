const express = require('express');
const controller = require('../controller/productController');
const vendorAuth = require('../middleware/vendorAuth');

const router = express.Router();

router.post('/addProduct', vendorAuth,controller.createProduct);

router.get('/getProduct', controller.readProduct);

router.put('/updateProduct', controller.updateProduct);

router.delete('/deleteProduct',controller.deleteProduct);

module.exports = router;