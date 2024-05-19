import React, { useState } from 'react';
import './MovieList.css';
import Modal from './Modal';

const List = ({ movies, onMovieClick }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const imageUrlBase = "https://image.tmdb.org/t/p/w500";
  const errorImage = "/error.png";
  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const moviesToShow = movies.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (endIndex < movies.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    onMovieClick(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <div className='movies'>
        {moviesToShow.map(movie => (
          <div key={movie.id} className='movie' onClick={() => handleMovieClick(movie)}>
            <img
              className='poster'
              src={movie.poster_path ? `${imageUrlBase}${movie.poster_path}` : errorImage}
              alt={movie.original_name || movie.title}
            />
            <div className='title'>{movie.original_name || movie.title}</div>
          </div>
        ))}
      </div>
      <div className='pagination'>
        <button onClick={goToPrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={goToNextPage} disabled={endIndex >= movies.length}>Next</button>
      </div>
      {selectedMovie && <Modal movie={selectedMovie} onClose={closeModal} />}
    </div>
  );
};

export default List;
