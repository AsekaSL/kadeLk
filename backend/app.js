const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/product", productRoutes);

app.use("/api/customer", customerRoutes);

app.use("/api/vendor", vendorRoutes);

app.use("/api/order", orderRoutes);

app.use('/api/cart', cartRoutes);

module.exports = app;