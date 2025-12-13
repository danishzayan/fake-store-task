import React, { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`mx-1 px-3 py-1 text-[0.9rem] sm:text-[1rem] rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all dark:bg-slate-700 dark:text-[#abc2d3] duration-300 transform hover:scale-105 ${
            currentPage === i ? "!bg-[#fbcc30] !text-black shadow-lg" : ""
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center flex-wrap justify-center mt-8 space-x-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-[#fbcc30] hover:text-black disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200 dark:bg-slate-700 dark:text-[#abc2d3] dark:disabled:bg-slate-800 dark:disabled:text-slate-500 dark:disabled:hover:bg-slate-800 dark:disabled:hover:text-slate-500 disabled:hover:text-gray-700 transition-all duration-300 cursor-pointer"
      >
        Previous
      </button>
      <div className="flex items-center space-x-2 cursor-pointer">
        {renderPageNumbers()}
      </div>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-[#fbcc30] hover:text-black dark:bg-slate-700 dark:text-[#abc2d3] dark:disabled:bg-slate-800 dark:disabled:text-slate-500 dark:disabled:hover:bg-slate-800 dark:disabled:hover:text-slate-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-700 transition-all duration-300 cursor-pointer ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
