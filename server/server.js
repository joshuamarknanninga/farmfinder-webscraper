const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  type: { type: String, required: true },
  location: { 
    type: String, 
    required: true,
    enum: ['Adkins', 'La Vernia', 'San Antonio'] // Added San Antonio
  },
  source: { 
    type: String, 
    required: true,
    enum: ['website', 'facebook', 'instagram']
  },
  url: { type: String, required: true },
  lastScraped: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);