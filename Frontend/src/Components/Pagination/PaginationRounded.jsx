import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({
  totalitems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalitems / itemsPerPage); i++) {
    pages.push(i);
  }
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        page={currentPage}
        count={pages.length}
        shape="rounded"
        onChange={handlePageChange}
      />
    </Stack>
  );
}
