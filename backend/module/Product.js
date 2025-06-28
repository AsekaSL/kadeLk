const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
    productId: String,
    title: String,
    description: String,
    price: Number,
    category: String,
    brand: String,
    rating: Number,
    stockQuantity: Number,
    vendorId: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;