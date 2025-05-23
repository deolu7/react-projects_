import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ search }) {
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("");

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        search(term, location, sortBy);
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSearch}>
                <div className="input-container">
                    <input placeholder="Search Businesses" onChange={handleTermChange} />
                    <input placeholder="Where?" onChange={handleLocationChange} />
                </div>
                <div className="button-container">
                    <button type="submit">Search</button>
                    <select id="sortBy" value={sortBy} onChange={handleSortByChange}>
                        <option value="bestmatch">best_match</option>
                        <option value="rating">rating</option>
                        <option value="review_count">review_count</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;