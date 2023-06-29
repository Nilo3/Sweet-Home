import PropTypes from "prop-types";

const Pagination = ({
  productPerPage,
  currentPage,
  setCurrentPage,
  totalProducts,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onPreviusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const onNextPage = () => {
    const totalPages = Math.ceil(totalProducts / productPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <ol className="flex flex-wrap justify-center text-xl gap-1 font-normal pb-8">
      <li>
        <a
          id="prev"
          className={`inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={onPreviusPage}
          disabled={currentPage === 1}
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
      {pageNumbers.map((noPage) => (
        <li key={noPage}>
          <a
            className={`block h-8 w-8 cursor-pointer rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 ${
              currentPage === noPage
                ? "border-blue-600 bg-blue-600 text-white"
                : ""
            }`}
            onClick={() => handlePageClick(noPage)}
          >
            {noPage}
          </a>
        </li>
      ))}
      <li>
        <a
          id="next"
          className={`inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${
            currentPage === Math.ceil(totalProducts / productPerPage)
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={onNextPage}
          disabled={currentPage === Math.ceil(totalProducts / productPerPage)}
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
  );
};

Pagination.propTypes = {
  productPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalProducts: PropTypes.number.isRequired,
};

export default Pagination;
