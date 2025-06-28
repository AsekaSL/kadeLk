const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cartSchema = new schema({
    cartId: String,
    customerId: String,
    items: [
        {
         productId: String,
         quantity: Number
        }
    ],
    lastUpdated: String
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;