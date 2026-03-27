import React from 'react';

const Pagination = ({ currentPage, totalResults, onPageChange }) => {
    const totalPages = Math.ceil(totalResults / 10);
    return (
        <div className='pagination'>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
    );
};

export default Pagination;