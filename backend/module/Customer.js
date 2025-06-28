const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
  customerId: String,
  name: String,
  email: String,
  phone: String,
  address: {
    line: String,
    city: String,
    postalCode: String,
  },
  registeredDate: String
});

const Customer = mongoose.model("Customers", productSchema);

module.exports = Customer;