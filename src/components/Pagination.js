import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, handlePageClick }) => {
  console.log("pag reload");
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName={"pagination"}
      pageLinkClassName={"page-number"}
      previousLinkClassName={"page-number"}
      nextLinkClassName={"page-number"}
      activeLinkClassName={"active"}
    />
  );
};

export default Pagination;
