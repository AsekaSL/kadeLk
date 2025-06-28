const Order = require('../module/Order');

const addOrder = (req) => {
    return new Promise((resolve, reject) => {
        const  order = new Order({
            orderId: req.orderId,
            customerId: req.customerId,
            orderDate: req.orderDate,
            status: req.status,
            totalAmount: req.totalAmount,
            items: req.items,
            shippingAddress: {
                line: req.shippingAddress.line,
                city: req.shippingAddress.city,
                postalCode: req.shippingAddress.postalCode,
            }
        });

        order.save()
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    })
};


const getOrder = () => {
    return new Promise((resolve, reject) => {
        Order.find()
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    })
};

const updateOrder = (req) => {
    return new Promise((resolve, reject) => {

        Order.updateOne({orderId: req.orderId}, {$set: {
            customerId: req.customerId,
            orderDate: req.orderDate,
            status: req.status,
            totalAmount: req.totalAmount,
            items: req.items,
            shippingAddress: {
                line: req.shippingAddress.line,
                city: req.shippingAddress.city,
                postalCode: req.shippingAddress.postalCode,
            }}})
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    })
};

const deleteOrder = (req) => {
    return new Promise((resolve, reject) => {
        Order.deleteOne({orderId: req.orderId})
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    })
};


exports.addOrder = addOrder;
exports.getOrder = getOrder;
exports.updateOrder = updateOrder;
exports.deleteOrder = deleteOrder;