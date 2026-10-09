import React from "react";

function Pagination({ handlePageChange, blogs, currentPage, pageSize }) {
  const totalPages = Math.ceil(blogs.length / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          key={pageNumber}
          className={pageNumber === currentPage ? "activePagination" : ""}
        >
          {/* ✅ Replaced anchor tag with button to prevent jumpy navigation */}
          <button
            onClick={() => handlePageChange(pageNumber)}
            className={`px-3 py-1 rounded cursor-pointer ${
              pageNumber === currentPage
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {pageNumber}
          </button>
        </li>
      )
    );
  };

  if (totalPages <= 1) return null;

  return (
    <ul className="pagination my-8 flex justify-center items-center gap-4">
      <li>
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      <div className="flex gap-2">{renderPaginationLinks()}</div>
      <li>
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
}

export default Pagination;