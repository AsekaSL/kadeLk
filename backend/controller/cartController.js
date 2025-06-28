const Cart = require('../module/Cart');

const addCart = (req) => {
    return new Promise((resolve, reject) => {
        const cart = new Cart({
            cartId: req.cartId,
            customerId: req.customerId,
            items: req.items,
            lastUpdated: req.lastUpdated
        });

        cart.save()
        .then(response => {
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        });
    })
};

const getCart = (req) => {
    return new Promise((resolve, reject) => {
        Cart.find()
        .then(response => {
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        });
    })
};

const updateCart = (req) => {
    return new Promise((resolve, reject) => {
        Cart.updateOne({cartId: req.cartId}, {$set: {
            customerId: req.customerId,
            items: req.items,
            lastUpdated: req.lastUpdated
        }})
        .then(response => {
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        });
    })
};

const deleteCart = (req) => {
    return new Promise((resolve, reject) => {
        Cart.finded()
        .then(response => {
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        });
    })
};

exports.addCart = addCart;
exports.getCart = getCart;
exports.updateCart = updateCart;
exports.deleteCart = deleteCart;