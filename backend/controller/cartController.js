const Cart = require('../module/Cart');

const addCart = async (req, res) => {

    const {customerId, items, lastUpdated} = req.body;

    const cart = new Cart({
            customerId,
            items,
            lastUpdated
        });

    try {
        const response = await cart.save();

        response ? res.send({success: true, message: "Succsfully deleted", response}) : res.send({success: false, message: "Not Added"}) ;

    } catch (error) {
        res.send({success: false, message: error.message});
    }
};

const getCart = async (req, res) => {

    const {cartId} = req.body;

    try {
        const response = await cart.save();

        response ? res.send({success: true, message: "Succsfully deleted", response}) : res.send({success: false, message: "Not Added"}) ;

    } catch (error) {
        res.send({success: false, message: error.message});
    }

};

const updateCart = async (req, res) => {

    const {cartId, customerId, items, lastUpdated} = req.body;

    try {
        const response = await Cart.updateOne({_id: cartId}, {$set: {customerId, items, lastUpdated}});

        response ? res.send({success: true, message: "Succsfully deleted", response}) : res.send({success: false, message: "Not Added"}) ;

    } catch (error) {
        res.send({success: false, message: error.message});
    }

};

const deleteCart = async (req, res) => {
    const {orderId} = req.body;

    try {
        const response = await Cart.deleteOne({_id: orderId});

        if(response) {
            res.send({success: true, message: "Succssfully deleted"});
        }else {
            res.send({success: false, message: "Error updating"})
        }

    } catch (error) {
        res.send({success: false, message: error.message});
    }
};

exports.addCart = addCart;
exports.getCart = getCart;
exports.updateCart = updateCart;
exports.deleteCart = deleteCart;