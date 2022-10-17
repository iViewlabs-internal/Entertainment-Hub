import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import MyPagination from "../../components/pagination/MyPagination";
import "./trending.css";

const mykey = process.env.REACT_APP_USER_API_KEY;
let numOfPages = 10;
const Trending = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${mykey}&page=${page}`
    )
      .then((res) => res.json())
      .then((items) => {
        setData(items.results);
      });
    window.scroll(0, 0);
  }, [page]);
  return (
    <>
      <Navbar />
      <div className="container-items">
        <Container>
          <div className="top-trending-div">
            <h1>Top Trendings of The Day</h1>
          </div>
          <Grid container spacing={2} alignItems="stretch">
            {data &&
              data.map((val: any) => {
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
        </Container>
            <MyPagination setPage={setPage} numOfPages={numOfPages}/>
      </div>
      <Footer />
    </>
  );
};

export default Trending;
