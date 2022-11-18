import { Button, Container, Grid, Tab, Tabs, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import MyPagination from "../../components/pagination/MyPagination";
import "./search.css";
import type { RootState } from "../../redux/Store";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../redux/features/page/pageSlice";
import { useGetSearchResultQuery } from "../../redux/services/entertainment";
import Language from "../../components/language/Language";
import { useAppSelector } from "../../redux/hooks";
import { changeLanguage } from "../../redux/features/language/languageSlice";

const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState(0);
  const [numOfPages, setNumOfPages] = useState(1);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const myPage = useSelector((state: RootState) => state.page.value);
  const language: any = useAppSelector(
    (state: { language: { value: any } }) => state.language.value
  );
  let obj = {
    language:language,
    myPage: myPage,
    type: type,
    searchText: searchText
  };
  
  const responseInfo = useGetSearchResultQuery(obj);

  const fetchData = () => {
    // responseInfo.refetch()
    setData(responseInfo?.data?.results);
    setLoading(false);
    setNumOfPages(
      responseInfo?.data?.total_pages >= 500
        ? 500
        : responseInfo?.data?.total_pages
    );
  };

  // let keys = Object.keys(obj);
  useEffect(() => {
    fetchData();
    window.scroll(0, 0);
  }, [obj]);
  useEffect(()=>{
    dispatch(changeLanguage("en-US"));
  },[])

  return (
    <>
      <Navbar />
      <div className="container-items header-search-div">
        <Container>
          <div className="search-language-div">
          <h2>Search with Name and Explore it!</h2>
          <Language/>
          </div>
          <div className="search-top-div">
            <TextField
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={(e: any) => setSearchText(e.target.value)}
            />
            <Button
              onClick={fetchData}
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
              dispatch(changePage(1));
            }}
            className="tabs-search"
            aria-label="disabled tabs example"
          >
            <Tab className="tabs-search-query" label="Movies"/>
            <Tab className="tabs-search-query" label="TV Series"/>
          </Tabs>
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
              <h2 id="demo" className="not-found-content">
                No Series Found
              </h2>
            ) : (
              <h2 className="not-found-content">No Movies Found</h2>
            )
          ) : (
            ""
          )}
        </Container>
        {loading === false && numOfPages > 1 ? (
          <MyPagination numOfPages={numOfPages} />
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
};

export default Search;