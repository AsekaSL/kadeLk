const express = require('express');
const controller = require("../controller/cartController");

const router = express.Router();


router.get("/get",(req, res) => {
    controller.getCart()
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(response);
    })
});

router.post('/add', (req, res) => {
    controller.addCart(req.body)
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
});

router.put('/update', (req, res) => {
    controller.updateCart(req.body)
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
});

router.delete('/delete', (req, res) => {
    controller.deleteCart(req.body)
    .then(response => {
        res.send(response)
        
    })
    .catch(error => {
        res.send(error)
    })
})

module.exports = router;