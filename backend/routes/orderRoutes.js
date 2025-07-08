const express = require('express');
const controller = require('../controller/orderController');

const router = express.Router();

router.post('/add',controller.addOrder);

router.get('/get',controller.getOrder);


router.put('/update',controller.updateOrder);


router.delete('/delete',controller.deleteOrder);

module.exports = router;