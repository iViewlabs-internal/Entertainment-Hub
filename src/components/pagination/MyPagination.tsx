import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./myPagination.css";

const MyPagination = (props: any) => {
  const handlePageChange = (page: number) => {
    props.setPage(page);
    window.scroll(0, 0);
  };

  return (
    <Stack spacing={3}>
      <Pagination
        onChange={(e: any) => handlePageChange(e.target.textContent)}
        count={props.numOfPages}
        hideNextButton
        hidePrevButton
      />
    </Stack>
  );
};

export default MyPagination;
