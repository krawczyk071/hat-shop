import React from "react";

const Pagination = ({ page, handleNext }) => {
  return (
    <div className="pagination">
      <h2 onClick={handleNext}>Next ({page.current})</h2>
    </div>
  );
};

export default Pagination;
