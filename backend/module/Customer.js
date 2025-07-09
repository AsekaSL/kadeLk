const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
  customerId: {type: String},
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  phone: {type: String, required: true},
  address: {
    line: {type: String, required: true},
    city: {type: String, required: true},
    postalCode: {type: String, required: true},
  },
  registeredDate: {type: String, required: true},
  password: {type: String, default: ''},
  verifyOtp: {type: String, default: ''},
  verifyOtpExpireAt: {type: Number, default: 0},
  isAccountVerified: {type: Boolean, default: false},
  resetOtp: {type: String, default: ''},
  resetOtpExpireAt: {type: Number, default: 0}
});

const Customer = mongoose.model("Customers", productSchema);

module.exports = Customer;