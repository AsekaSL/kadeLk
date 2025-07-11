const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authCustomerRoutes = require('./routes/authRoutes.js');
const authVendorRoutes = require('./routes/authVendorRoutes.js');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/product", productRoutes);

app.use("/api/customer", customerRoutes);

app.use("/api/vendor", vendorRoutes);

app.use("/api/order", orderRoutes);

app.use('/api/cart', cartRoutes);


//Auth Customer
app.use('/api/customer', authCustomerRoutes);

//Auth Vendor
app.use('/api/vendor', authVendorRoutes);

module.exports = app;