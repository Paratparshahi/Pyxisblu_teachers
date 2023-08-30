import React from 'react'

export const Dashboard = ({ currentPage, totalPages, onPageChange }) => {
  console.log(totalPages,currentPage)
  const getPageRange = (currentPage, totalPages, displayRange = 5) => {
    const halfRange = Math.floor(displayRange / 2);

    if (totalPages <= displayRange) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }
    if (currentPage - halfRange <= 0) {
      return Array.from({ length: displayRange }, (_, index) => index + 1);
    }
    if (currentPage + halfRange >= totalPages) {
      return Array.from({ length: displayRange }, (_, index) => totalPages - displayRange + index + 1);
    }
    return Array.from({ length: displayRange }, (_, index) => currentPage - halfRange + index);
  };

  const pageRange = getPageRange(currentPage, totalPages);
  return (
    <div>
    <button
    disabled={currentPage === 1}
    onClick={() => onPageChange(currentPage - 1)}
  >
    Previous
  </button>
  {pageRange.map((pageNumber) => (
    <button
      key={pageNumber}
      onClick={() => onPageChange(pageNumber)}
      disabled={currentPage === pageNumber}
    >
      {pageNumber}
    </button>
  ))}
  <button
    disabled={currentPage === totalPages}
    onClick={() => onPageChange(currentPage + 1)}>
    Next
  </button>
  </div>
  )
}
