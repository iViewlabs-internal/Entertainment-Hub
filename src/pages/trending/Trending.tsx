import { Box, Container, FormControl, Grid, NativeSelect } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import MyPagination from "../../components/pagination/MyPagination";
import "./trending.css";
import type { RootState } from "../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllTrendingQuery } from "../../redux/services/entertainment";
import { changePage } from "../../redux/features/page/pageSlice";

let numOfPages = 10;
const Trending = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [trending, setTrending] = useState("day");
  const dispatch = useDispatch();

  const myPage = useSelector((state: RootState) => state.page.value);
  let obj = {
    myPage: myPage,
    trending: trending,
  };
  const responseInfo = useGetAllTrendingQuery(obj);

  useEffect(() => {
    setData(responseInfo?.data?.results);
    setLoading(false);
    window.scroll(0, 0);
  }, [obj]);

  useEffect(() => {
    dispatch(changePage(1));
  }, [trending]);

  const func = (e: ChangeEvent<HTMLSelectElement>) => {
    setTrending(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container-items">
        <Container>
          <div className="top-trending-div">
            <h1>
              Top Trendings of The
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <NativeSelect
                    defaultValue={"day"}
                    inputProps={{
                      name: "Trending",
                      id: "uncontrolled-native",
                    }}
                    onChange={(e) => {
                      func(e);
                    }}
                  >
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </h1>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <Grid container spacing={2}>
              {data &&
                data?.map((val: any) => {
                  return (
                    <Content
                      id={val.id}
                      key={val.id}
                      title={val.title ? val.title : val.name}
                      date={val.first_air_date}
                      poster={val.poster_path}
                      mediaType={val.media_type}
                      release_date={val.release_date}
                      overview={val.overview}
                      first_air_date={val.first_air_date}
                      vote_average={val.vote_average}
                    />
                  );
                })}
            </Grid>
          )}
        </Container>
        {numOfPages > 1 && loading===false ? <MyPagination numOfPages={numOfPages} /> : ""}
      </div>
      <Footer />
    </>
  );
};

export default Trending;