import React from 'react';

const ResultsList = ({ results }) => {
  return (
    <div className="results-container">
      {results.length === 0 ? (
        <p className="no-results">No sellers found. Try adjusting your search.</p>
      ) : (
        results.map((result, index) => (
          <div key={index} className="result-item">
            <h3>{result.title}</h3>
            <a 
              href={result.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="result-link"
            >
              {result.url.includes('facebook') ? 'Facebook Post' : 'Instagram Post'}
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default ResultsList;