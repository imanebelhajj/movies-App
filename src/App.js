import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Modal from './components/Modal';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(false); 
  };

  const closeModal = () => {
    setIsModalOpen(null);
  };

  const fetchMovies = (query) => {
    const apiUrl = `https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=false&query=${query}`;

    fetch(apiUrl)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        setMovies(resp.results || []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm);
  };

  return (
    <div className={`app ${isModalOpen ? 'blurred' : ''}`}>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a TV show"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <MovieList movies={movies} onMovieClick={openModal} />

      {isModalOpen && (
        <Modal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
