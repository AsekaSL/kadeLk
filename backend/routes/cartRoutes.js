const express = require('express');
const controller = require("../controller/cartController");

const router = express.Router();


router.get("/get",controller.getCart);

router.post('/add',controller.addCart);

router.put('/update', controller.updateCart);

router.delete('/delete', controller.deleteCart)

module.exports = router;