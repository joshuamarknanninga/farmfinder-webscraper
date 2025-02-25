const express = require('express');
const router = express.Router();
const Scraper = require('../scraper/scraper');
const Product = require('../models/Product');

router.post('/scrape', async (req, res) => {
  const { productType, location } = req.body;
  
  try {
    const results = await Scraper.findLocalSellers(productType, location);
    
    // Save to database
    await Product.insertMany(results.map(result => ({
      type: productType,
      location,
      source: result.url.includes('facebook') ? 'facebook' : 'instagram',
      url: result.url
    })));
    
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/products', async (req, res) => {
  const { productType, location } = req.query;
  const products = await Product.find({ productType, location });
  res.json(products);
});

module.exports = router;