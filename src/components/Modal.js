import React from 'react';
import './Modal.css';

const Modal = ({ movie, onClose }) => {
  const imageUrlBase = "https://image.tmdb.org/t/p/w500";
  const errorImage = "/error.png";

  if (!movie) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-content">
          <h2 className="modal-title">{movie.original_name || movie.title}</h2>
          <img
            className="modal-poster"
            src={movie.poster_path ? `${imageUrlBase}${movie.poster_path}` : errorImage}
            alt={movie.original_name || movie.title}
          />
          <div className={`modal-info`}>
            <p>{movie.overview}</p>
            <p><strong>First air date:</strong> {movie.first_air_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
