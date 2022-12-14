import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import Profile from "./pages/profile/Profile";
import ResetPass from "./pages/reset-pass/ResetPass";
import Search from "./pages/search-content/Search";
import Trending from "./pages/trending/Trending";
import TvSeries from "./pages/tv-series/TvSeries";

function App() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
      ) {
        document.getElementById("myBtn")!.style.display = "block";
      } else {
        document.getElementById("myBtn")!.style.display = "none";
      }
    }
  });

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-series" element={<TvSeries />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path:string={["/profile" || "/profile/edit"]} element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
      <div onClick={topFunction} id="myBtn">
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </>
  );
}

export default App;