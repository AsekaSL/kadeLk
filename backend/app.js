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

app.use("/product", productRoutes);

app.use("/customer", customerRoutes);

app.use("/vendor", vendorRoutes);

app.use("/order", orderRoutes);

app.use('/cart', cartRoutes);

module.exports = app;