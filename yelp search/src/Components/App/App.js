import './App.css';
import { useState } from 'react';
import searchYelp from '../../Utils/Yelp';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

function App() {
  const [ businesses, setBusinesses ] = useState([]);

  const search = async (term, location, sortBy) => {
    const searchResults = await searchYelp(term, location, sortBy);
    setBusinesses(searchResults);
  };

  return (
    <main>
      <h1>Black Squirrel Reviews</h1>
      <SearchBar search={search} />
      <BusinessList businesses={businesses} />
    </main>
  );
}

export default App;
