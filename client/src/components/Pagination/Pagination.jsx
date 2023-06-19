const Pagination = ({ productPerPage, currentPage, setCurrentPage, totalProducts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <nav aria-label="Page navigation example ">
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={onPreviusPage}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((noPage) => (
          <li key={noPage}>
            <a
              className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === noPage ? 'bg-gray-300' : '' // Aplica el fondo gris si es la página actual
              }`}
              onClick={() => setCurrentPage(noPage)}
            >
              {noPage}
            </a>
          </li>
        ))}
        <li>
          <a
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={onNextPage}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;


