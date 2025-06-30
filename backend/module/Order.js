const mongoose = require('mongoose');
const schema = mongoose.Schema;

const orderSchema = new schema({
  orderId: Number,
  customerId: String,
  orderDate: String,
  status: String,
  totalAmount: Number,
  items: [
    {
      productId: String,
      quantity: String,
      price: String,
      size: String,
      color: String,
      price: Number,
      image: String
    }
  ],
  shippingAddress: {
    line: String,
    city: String,
    postalCode: Number,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;