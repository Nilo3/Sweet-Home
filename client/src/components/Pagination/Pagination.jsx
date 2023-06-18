// Pagination.js
import { useEffect } from "react";
import { getPagination } from '../../Redux/actions/product/productActions';
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.products.pages.current);
  const pageNumber = useSelector((state) => state.products.pages);

  useEffect(() => {
    dispatch(getPagination(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (pageNumber) => {
    dispatch(getPagination(pageNumber));
  };

  return (
    <div>
      {pageNumber.prev && (
        <button onClick={() => handlePageChange(pageNumber.prev)}>Prev</button>
      )}
      <span>{currentPage}</span>
      {pageNumber.next && (
        <button onClick={() => handlePageChange(pageNumber.next)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
