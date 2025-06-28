const express = require('express');
const controller = require('../controller/vendorController');

const router = express.Router();

router.post('/add',(req, res) => {
    controller.addVendor(req.body)
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error)
    })
});

router.get('/get',(req, res) => {
    controller.getVendor()
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error)
    })
});


router.put('/update',(req, res) => {
    controller.updateVendor(req.body)
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error)
    })
});


router.delete('/delete',(req, res) => {
    controller.deleteVendor(req.body)
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error)
    })
});

module.exports = router;