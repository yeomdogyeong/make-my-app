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
      itemsCountPerPage={postPerPage} //페이지마다보여질개수
      totalItemsCount={totalCount ? totalCount : 0}
      pageRangeDisplayed={pageRangeDisplayed} //페이지에보여질개수
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
