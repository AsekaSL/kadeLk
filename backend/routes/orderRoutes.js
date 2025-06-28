const express = require('express');
const controller = require('../controller/orderController');

const router = express.Router();

router.post('/add',(req, res) => {
    controller.addOrder(req.body)
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error)
    })
});

router.get('/get',(req, res) => {
    controller.getOrder()
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error)
    })
});


router.put('/update',(req, res) => {
    controller.updateOrder(req.body)
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error)
    })
});


router.delete('/delete',(req, res) => {
    controller.deleteOrder(req.body)
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error)
    })
});

module.exports = router;