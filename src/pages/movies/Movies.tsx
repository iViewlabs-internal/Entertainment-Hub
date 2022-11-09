import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import MyPagination from "../../components/pagination/MyPagination";
import { day } from "../../utils";
import "./movies.css";

const mykey = process.env.REACT_APP_USER_API_KEY;
const Movies = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [genre, setGenre] = useState<any[]>([]);
  const [genreArr, setGenreArr] = useState<any[]>([]);
  let [myStr,setMyStr] = useState("")
  const numOfPages = 500;
  
  const tempFunc = (id: number, snd: string) => {
    const temp = document.querySelector(`#${snd}`) as HTMLInputElement;

    if (temp.checked) {
      setGenreArr([...genreArr, id]);
    } else {
      // if (genreArr.includes(id) === true) {
      genreArr.splice(genreArr.indexOf(id), 1);
      setGenreArr([...genreArr]);
      // }
    }
  };
  const applyFilter = () => {
    setMyStr("")
    console.log(myStr , "lll")
    let tempStr = ""
    genreArr.map((val) => {
       tempStr+= val+","
    });
    setMyStr(tempStr);
    console.log(myStr);
  };

  useEffect(() => {
    console.log("called", myStr , "yes");
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${mykey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${myStr}`
    )
      .then((res) => res.json())
      .then((items) => {
        setData(items.results);
        setLoading(false);
      });
  }, [page,myStr]);

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
        {genre.map((val) => {
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
        <button onClick={applyFilter} className="btn-apply">Apply Filters</button>
      </div>
     
      <div className="container-items">
        <Container>
        <div className="top-movies-div">
          <h4 className="filter-head" onClick={openNav}>
            Filter<i className="fa-solid fa-filter"></i>
          </h4>
          <h1>Movies</h1>
          <h4 className="day-today">{day}</h4>
        </div>
          {loading ? (
            <Loader />
          ) : (
            <Grid container spacing={2} alignItems="stretch">
              {data &&
                data.map((val: any) => {
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
        {data.length > 19 && (
          <MyPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Movies;
