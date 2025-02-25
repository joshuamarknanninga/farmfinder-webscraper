const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  type: { type: String, required: true },
  location: { type: String, required: true },
  source: { type: String, required: true }, // website, facebook, instagram
  url: { type: String, required: true },
  lastScraped: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);