import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getByUrl } from "../Redux/Actions/MoviesAction";
import { GETPAGE } from "../Redux/Types/MoviesTypes";
import { useEffect } from "react";
const PaginationComponent = () => {
  const [pages, setPagesCount] = useState(0);
  const totalPages = useSelector((state) => state.pageCounter); //acces data(movies) in store
  const dispatch = useDispatch();

  //page count changed automatic (like search or get all movies )
  useEffect(() => {
    setPagesCount(totalPages);
  }, [totalPages]);
  const handlePageClick = (data) => {
    dispatch(getByUrl(GETPAGE + `${data.selected + 1}`));
  };

  return (
    <ReactPaginate
      // style={{ border: "5px solid red" }}
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pages}
      previousLabel="< السابق"
      containerClassName={
        "pagination justify-content-center p-3  text-danger  j"
      }
      pageClassName="page-item bg-dark light border-danger j"
      pageLinkClassName="page-link bg-dark text-light border-danger "
      previousLinkClassName="page-link bg-dark text-light border-danger m "
      nextLinkClassName="page-link bg-dark text-light border-danger m "
      breakLinkClassName="page-link bg-dark text-light border-danger"
      previousClassName="page-item bg-dark text-light m "
      nextClassName="page-item bg-dark text-light m "
      breakClassName="page-item bg-dark text-light "
      activeClassName="active"
    />
  );
};

export default PaginationComponent;
