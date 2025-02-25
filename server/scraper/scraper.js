const axios = require('axios');
const cheerio = require('cheerio');

class Scraper {
  static async searchGoogle(query) {
    try {
      const response = await axios.get(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
      const $ = cheerio.load(response.data);
      const results = [];
      
      $('div.g').each((i, el) => {
        results.push({
          title: $(el).find('h3').text(),
          url: $(el).find('a').attr('href')
        });
      });
      
      return results;
    } catch (error) {
      console.error('Google search error:', error);
      return [];
    }
  }

  static async findLocalSellers(productType, location) {
    const query = `site:facebook.com OR site:instagram.com ${productType} ${location} Texas "sell" OR "for sale"`;
    const results = await this.searchGoogle(query);
    
    return results.filter(result => 
      result.url.includes('facebook.com') || 
      result.url.includes('instagram.com')
    );
  }
}

module.exports = Scraper;