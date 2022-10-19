import { Button, Container, Grid, Tab, Tabs, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import MyPagination from "../../components/pagination/MyPagination";
import "./search.css";

const mykey = process.env.REACT_APP_USER_API_KEY;
const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [searchText, setSearchText] = useState("");

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/${
        type ? "tv" : "movie"
      }?api_key=${mykey}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    )
      .then((res) => res.json())
      .then((items) => {
        setData(items.results);
        setLoading(false);
        setNumOfPages(items.total_pages);
      });
  };

  useEffect(() => {
    fetchData();
    window.scroll(0, 0);
  }, [page, type]);

  return (
    <>
      <Navbar />
      <div className="container-items header-search-div">
        <Container>
          <h2>Search with Name and Explore it!</h2>
          <div className="search-top-div">
            <TextField
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={(e: any) => setSearchText(e.target.value)}
            />
            <Button
              onClick={fetchData}
              // variant=""
              style={{backgroundColor:"rgba(0, 0, 0, 0.06)",color:"black"}}
              className="btn-search-icon"
            >
              <i
                className="fa-solid fa-magnifying-glass fa-2x"
                id="search-item"
              ></i>
            </Button>
          </div>
          <Tabs
            value={type}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            className="tabs-search"
            aria-label="disabled tabs example"
          >
            <Tab className="tabs-search-query" label="Movies" />
            <Tab className="tabs-search-query" label="TV Series" />
          </Tabs>
          {loading ? (
            <Loader />
          ) : (
            <Grid container spacing={2}>
              {data &&
                data.map((val: any) => {
                  return (
                    <Content
                      id={val.id}
                      key={val.id}
                      title={val.title ? val.title : val.name}
                      poster={val.poster_path}
                      mediaType={type ? "tv" : "movie"}
                      release_date={
                        val.release_date ? val.release_date : val.first_air_date
                      }
                      overview={val.overview}
                      vote_average={val.vote_average}
                    />
                  );
                })}
            </Grid>
          )}
          {!data ? (
            type ? (
              <h2 id="demo" style={{ textAlign: "center" }}>
                No Series Found
              </h2>
            ) : (
              <h2 style={{ textAlign: "center" }}>No Movies Found</h2>
            )
          ) : (
            ""
          )}
        </Container>
        {loading === false && numOfPages > 1 ? (
          <MyPagination setPage={setPage} numOfPages={numOfPages} />
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
};

export default Search;
