const express = require('express');
const controller = require('../controller/productController');

const router = express.Router();

    router.post('/addProduct', (req, res) => {
        controller.createProduct(req.body)
        .then(response => res.send(response))
        .catch(error => res.send(error));
    });

    router.get('/product', (req, res) => {
        controller.readProduct()
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.send(error)
        });
    });

    router.put('/updateProduct', (req, res) => {
        controller.updateProduct(req.body)
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.send(error);
        })
    });

    router.delete('/deleteProduct', (req, res) => {
        controller.deleteProduct(req.body)
        .then(response => {
            res.send(response)
        })
        .catch(error => {
            res.send(error);
        })
    })

module.exports = router;