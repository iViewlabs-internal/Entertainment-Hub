import { Container,Grid,SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import Language from "../../components/language/Language";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import MyPagination from "../../components/pagination/MyPagination";
import "./movies.css";

const mykey = process.env.REACT_APP_USER_API_KEY;
const Movies = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [genre, setGenre] = useState<any[]>([]);
  const [genreArr, setGenreArr] = useState<any[]>([]);
  let [genreStr, setgenreStr] = useState("");
  const [numOfPages, setNumOfPages] = useState(0);

  const tempFunc = (id: number, idStr: string) => {
    const temp = document.querySelector(`#${idStr}`) as HTMLInputElement;

    if (temp.checked) {
      setGenreArr([...genreArr, id]);
    } else {
      // if (genreArr.includes(id) === true) {
      genreArr.splice(genreArr.indexOf(id), 1);
      // setGenreArr([...genreArr]);
      // }
    }
  };
  const applyFilter = () => {
    setgenreStr("");
    let tempStr = "";
    genreArr.map((val) => {
      tempStr += val + ",";
    });
    setgenreStr(tempStr);
    closeNav();
  };
  const [language, setLanguage] = useState('en-Us');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${mykey}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreStr}`
    )
      .then((res) => res.json())
      .then((items) => {
        setData(items.results);
        // setNumOfPages(items.total_pages)
        setNumOfPages(items.total_pages >= 500 ? 500 : items.total_pages);
        setLoading(false);
      });
  }, [page, genreStr,language]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${mykey}&language=en-US`
    )
      .then((res) => res.json())
      .then((items) => {
        setGenre(items.genres);
      });
  }, [page]);
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
            <div key={val.id} id="header-filter-div">
              <input
                type="checkbox"
                id={`check${val.id}`}
                onClick={() => tempFunc(val.id, `check${val.id}`)}
              />
              <label className="all-lables">{val.name}</label>
            </div>
          );
        })}
        <button onClick={applyFilter} className="btn-apply">
          Apply Filters
        </button>
      </div>

      <div className="container-items">
        <Container>
          <div className="top-movies-div">
            <h4 className="filter-head" onClick={openNav}>
              Filter<i className="fa-solid fa-filter"></i>
            </h4>
            <h1 className="movie-head">Movies</h1>
            <Language language={language} handleChange={handleChange}/>
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
                      release_date={val.release_date}
                      poster={val.poster_path}
                      mediaType="movie"
                      overview={val.overview}
                      vote_average={val.vote_average}
                    />
                  );
                })}
            </Grid>
          )}
        </Container>
        {numOfPages > 1 && (
          <MyPagination setPage={setPage} numOfPages={numOfPages} />
        )}
          {(!data.length && loading === false) ? <h1 className="no-data-heading"> <i className="fa-solid fa-face-frown"></i> No Data Found</h1> : ""}
      </div>
      <Footer />
    </>
  );
};

export default Movies;