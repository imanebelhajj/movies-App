import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, onNextPage, onPrevPage }) => {
  return (
    <div className='pagination'>
      {currentPage > 1 && (
        <button className="page" onClick={onPrevPage}>
          Previous
        </button>
      )}
      <button className="page" onClick={onNextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
