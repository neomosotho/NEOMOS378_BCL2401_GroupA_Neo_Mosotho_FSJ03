// components/Pagination.js

"use client";
export default function Pagination({
  currentPage,
  totalProducts,
  productsPerPage,
  onPageChange
}) {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage);
    window.location.search = params.toString();
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-black hover:bg-gray-700 text-white rounded disabled:bg-gray-300"
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        // disabled={currentPage}
        className="px-4 py-2 bg-black hover:bg-gray-700 text-white rounded disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
}
