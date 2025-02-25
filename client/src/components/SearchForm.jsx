import { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ onResults }) => {
  const [productType, setProductType] = useState('eggs');
  const [location, setLocation] = useState('Adkins');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('/api/scrape', {
        productType,
        location
      });
      
      onResults(response.data);
    } catch (error) {
      console.error('Search error:', error);
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <select 
        value={productType}
        onChange={(e) => setProductType(e.target.value)}
      >
        <option value="eggs">Eggs</option>
        <option value="dairy">Dairy</option>
        {/* Add more products here */}
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="Adkins">Adkins, TX</option>
        <option value="La Vernia">La Vernia, TX</option>
        <option value="San Antonio">San Antonio, TX</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? 'Searching...' : 'Find Sellers'}
      </button>
    </form>
  );
};

export default SearchForm;