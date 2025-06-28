const mongoose = require('mongoose');
const schema = mongoose.Schema;

const vendorSchema = new schema({
  vendorId: String,
  companyName: String,
  contactName: String,
  email: String,
  phone: String,
  address: {
    line: String,
    city: String,
    postalCode: Number,
    country: String
  }
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;