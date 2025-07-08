const Order = require('../module/Order');

const addOrder = async (req, res) => {
    const { customerId, orderDate, status, totalAmount, items, shippingAddress} = req.body;

    try {
        const order = new Order({
             customerId, orderDate, status, totalAmount, items, shippingAddress
        });

        const response = await order.save();

        response ? res.send({success: true, message: "Succssfully added!"}) : res.send({success: false, message: "Not Added"}) ;

    } catch (error) {
        res.send({success: false, message: error.message});
    }

};


const getOrder = async (req, res) => {
    const {orderId} = req.body;

    try {
        const response = await Order.findById(orderId);

        response ? res.send({success: true, message: "Succsfully getOrder", response}) : res.send({success: false, message: "Not Added"}) ;

    } catch (error) {
        res.send({success: false, message: error.message});
    }

};

const updateOrder = async (req) => {

    const { orderId ,customerId, orderDate, status, totalAmount, items, shippingAddress} = req.body;

    try {
        
        const response = await Order.updateOne({_id: orderId}, {$set: {
            customerId,
            orderDate,
            status,
            totalAmount,
            items,
            shippingAddress}});
        
        response ? res.send({success: true, message: "Succsfully updated"}) : res.send({success: false, message: "Not Added"}) ;

    } catch (error) {
        res.send({success: false, message: error.message});
    }
};

const deleteOrder = async (req, res) => {
    const {orderId} = req.body;

    try {
        const response = await Order.deleteOne({_id: orderId});

        response ? res.send({success: true, message: "Succsfully deleted", response}) : res.send({success: false, message: "Not Added"}) ;

    } catch (error) {
        res.send({success: false, message: error.message});
    }
};


exports.addOrder = addOrder;
exports.getOrder = getOrder;
exports.updateOrder = updateOrder;
exports.deleteOrder = deleteOrder;