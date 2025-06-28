const express = require('express');
const controller = require('../controller/customerController');

const router = express.Router();


router.get("/getAll",(req, res) => {
    controller.readCustomers()
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(response);
    })
});

router.post('/add', (req, res) => {
    controller.saveCustomer(req.body)
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
});

router.get("/customer", (req, res) => {
    controller.readCustomer(req.body)
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
});

router.put('/update', (req, res) => {
    controller.updateCustomer(req.body)
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
});

router.delete('/delete', (req, res) => {
    controller.deleteCustomer(req.body)
    .then(response => {
        res.send(response)
        
    })
    .catch(error => {
        res.send(error)
    })
})

module.exports = router;