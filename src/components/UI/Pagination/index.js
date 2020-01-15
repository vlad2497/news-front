import React from "react";
import "./style.scss";

export const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="pagination">
      <div
        className="pagination__arrow"
        onClick={() => setPage(page - 1 < 0 ? 0 : page - 1)}
      >
        &#8678;
      </div>
      <div
        className="pagination__arrow"
        onClick={() => setPage(page + 1 > totalPages ? totalPages : page + 1)}
      >
        &#8680;
      </div>
    </div>
  );
};
