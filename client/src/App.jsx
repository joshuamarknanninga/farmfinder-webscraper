import { useState } from 'react';
import SearchForm from './components/SearchForm';
import ResultsList from './components/ResultsList';
import './App.css';

function App() {
  const [results, setResults] = useState([]);

  const handleResults = (searchResults) => {
    setResults(searchResults);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Local Farm Finder</h1>
        <p>Find fresh eggs and dairy in your area</p>
      </header>
      
      <main className="main-content">
        <SearchForm onResults={handleResults} />
        <ResultsList results={results} />
      </main>

      <footer className="app-footer">
        <p>© 2023 Farm Finder - PWA MVP</p>
      </footer>
    </div>
  );
}

export default App;