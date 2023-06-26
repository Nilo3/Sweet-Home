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

  const onPreviusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPage = () => {
    const totalPages = Math.ceil(totalProducts / productPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            className={`px-3 py-2 ml-0 leading-tight cursor-pointer select-none text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={onPreviusPage}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((noPage) => (
          <li key={noPage}>
            <a
              className={`px-3 py-2 leading-tight text-gray-500 cursor-pointer select-none bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === noPage ? "bg-gray-400" : ""
              }`}
              onClick={() => setCurrentPage(noPage)}
            >
              {noPage}
            </a>
          </li>
        ))}
        <li>
          <a
            className={`px-3 py-2 leading-tight cursor-pointer select-none text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              currentPage === Math.ceil(totalProducts / productPerPage)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={onNextPage}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  productPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalProducts: PropTypes.number.isRequired,
};

export default Pagination;
