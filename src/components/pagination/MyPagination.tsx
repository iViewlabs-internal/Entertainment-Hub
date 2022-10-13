import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

let numberOfPages = 11;
const MyPagination = (props:any) => {
    const handlePageChange = (page: number) => {
        props.setPage(page);
        window.scroll(0, 0);
      };
    
  return (
    <Stack spacing={3}>
      <Pagination 
       onChange={(e:any) => handlePageChange(e.target.textContent)}
       count={numberOfPages}
       hideNextButton
       hidePrevButton
      />
    </Stack>
  );
};

export default MyPagination;
