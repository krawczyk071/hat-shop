import React from "react";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  pageCount: number;
  handlePageClick: (event: any) => void;
};

const Pagination = ({ pageCount, handlePageClick }: PaginationProps) => {
  // console.log("pag reload");
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
