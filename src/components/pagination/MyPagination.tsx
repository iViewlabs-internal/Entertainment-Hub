import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { changePage } from "../../redux/features/page/pageSlice";
import "./myPagination.css";
import { useDispatch } from 'react-redux';

const MyPagination = (props: any) => {
  const dispatch = useDispatch();
  const handlePageChange = (page: number) => {
    dispatch(changePage(page))
    window.scroll(0, 0);
  };
 
  return (
    <Stack spacing={3}>
      <Pagination
        onChange={(e: any) => handlePageChange(e.target.textContent)}
        count={props.numOfPages}
        // hideNextButton
        // hidePrevButton
      />
    </Stack>
  );
};

export default MyPagination;