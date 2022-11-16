import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import Language from "../../components/language/Language";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import MyPagination from "../../components/pagination/MyPagination";
import "./tvSeries.css";
import type { RootState } from "../../redux/Store";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { useGetAllTvSeriesQuery } from "../../redux/services/entertainment";
import { useGetAllGenreQuery } from "../../redux/services/entertainment";

const TvSeries = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [genre, setGenre] = useState<any[]>([]);
  const [genreArr, setGenreArr] = useState<any[]>([]);
  let [myStr, setMyStr] = useState("");
  const [numOfPages, setNumOfPages] = useState(0);

  const myPage = useSelector((state: RootState) => state.page.value);
  const language: any = useAppSelector(
    (state: { language: { value: any } }) => state.language.value
  );
  let obj = {
    myPage: myPage,
    language: language,
    myStr: myStr,
  };
  const responseInfo = useGetAllTvSeriesQuery(obj);
  const genreInfo = useGetAllGenreQuery();

  const tempFunc = (id: number, snd: string) => {
    const temp = document.querySelector(`#${snd}`) as HTMLInputElement;
    if (temp.checked) {
      setGenreArr([...genreArr, id]);
    } else {
      genreArr.splice(genreArr.indexOf(id), 1);
    }
  };
  const applyFilter = () => {
    setMyStr("");
    let tempStr = "";
    genreArr?.map((val) => {
      tempStr += val + ",";
    });
    setMyStr(tempStr);
    closeNav();
  };

  useEffect(() => {
    setData(responseInfo?.data?.results);
    setNumOfPages(
      responseInfo?.data?.total_pages >= 500
        ? 500
        : responseInfo?.data?.total_pages
    );
    setLoading(false);
  }, [obj]);

  useEffect(() => {
    setGenre(genreInfo?.data?.genres);
  }, [myPage]);

  const openNav = () => {
    document.getElementById("mySidenav")!.style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav")!.style.width = "0";
  };

  return (
    <>
      <Navbar />
      <div id="mySidenav" className="sidenav">
        <div className="genres-div">
          <h4>Genres</h4>
          <a href="#!" className="closebtn" onClick={closeNav}>
            &times;
          </a>
        </div>
        <hr className="hr-genre" />
        {genre?.map((val) => {
          return (
            <div key={val.id} id="header-filter-tv">
              <input
                type="checkbox"
                id={`check${val.id}`}
                onClick={() => tempFunc(val.id, `check${val.id}`)}
              />
              <label htmlFor={`check${val.id}`} className="all-lables">
                {val.name}
              </label>
            </div>
          );
        })}
        <button onClick={applyFilter} className="btn-apply">
          Apply Filters
        </button>
      </div>
      <div className="container-items">
        <Container>
          <div className="top-series-div">
            <h4 className="filter-head" onClick={openNav}>
              Filter<i className="fa-solid fa-filter"></i>
            </h4>

            <h1 className="series-head">Tv Series</h1>
            <Language />
          </div>
          {loading ? (
            <Loader />
          ) : (
            <Grid container spacing={2} alignItems="stretch">
              {data &&
                data?.map((val: any) => {
                  return (
                    <Content
                      key={val.id}
                      id={val.id}
                      title={val.title ? val.title : val.name}
                      release_date={
                        val.release_date ? val.release_date : val.first_air_date
                      }
                      poster={val.poster_path}
                      mediaType="tv"
                      overview={val.overview}
                      vote_average={val.vote_average}
                    />
                  );
                })}
            </Grid>
          )}
        </Container>
        {numOfPages > 1 && <MyPagination numOfPages={numOfPages} />}
        {!data?.length && loading === false ? (
          <h1 className="no-data-heading">
            {" "}
            <i className="fa-solid fa-face-frown"></i> No Data Found
          </h1>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
};

export default TvSeries;