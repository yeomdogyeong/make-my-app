import React, { useState } from "react";
import "./Paging.css";
import Pagination from "react-js-pagination";

const Paging = ({
  pageRangeDisplayed,
  totalCount,
  page,
  postPerPage,
  handlePageChange,
}) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={postPerPage}
      totalItemsCount={totalCount ? totalCount : 0}
      pageRangeDisplayed={pageRangeDisplayed}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
