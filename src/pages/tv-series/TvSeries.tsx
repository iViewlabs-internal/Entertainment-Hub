import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import MyPagination from "../../components/pagination/MyPagination";

const mykey = process.env.REACT_APP_USER_API_KEY;
const TvSeries = () => {
  const [loading,setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [data, setData] = useState<any[]>([]);
    const numOfPages = 500
    
    useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${mykey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      )
        .then((res) => res.json())
        .then((items) => {
          setData(items.results);
          setLoading(false)
        });
      window.scroll(0, 0);
    }, [page]);
  return (
    <>
      <Navbar />
      <div className="container-items">
        <Container>
          <div className="top-trending-div">
            <h1>Tv Series</h1>
          </div>
          {
            loading ? <Loader/>:
          
          <Grid container spacing={2} alignItems="stretch">
            {data &&
              data.map((val: any) => {
                return (
                  <Content
                    key={val.id}
                    id={val.id}
                    title={val.title ? val.title : val.name}
                    release_date={val.release_date ? val.release_date : val.first_air_date}
                    poster={val.poster_path}
                    mediaType="tv"
                    overview={val.overview}
                    vote_average={val.vote_average}
                  />
                );
              })}
          </Grid>
}
        </Container>
        {
         loading === false ?
        <MyPagination setPage={setPage} numOfPages={numOfPages} />
        :
        ""
        }
      </div>
      <Footer />
    </>
  );
};

export default TvSeries;
