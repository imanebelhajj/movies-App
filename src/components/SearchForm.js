import React from 'react';
import './SearchForm.css';

const SearchForm = ({ search, setSearch, onButtonClick }) => {
  return (
    <form onSubmit={onButtonClick}>
      <input 
        type="text" 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
        placeholder='Search for a TV show'
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
