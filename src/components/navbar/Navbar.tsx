import { Container } from "@mui/system";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
   const location = useLocation();
   const handleRoute = () => {
   
      if (location.pathname === "/trending") {
        document.getElementById("trending-item")!.style.color =
          "blue";
      } else if (
        location.pathname === "/movies"
      ) {
        document.getElementById("movies-item")!.style.color =
          "blue";
      } else if (
        location.pathname === "/tv-series"
      ) {
        document.getElementById("tv-series-item")!.style.color =
          "blue";
      } else if(location.pathname === "/search"){
        document.getElementById("search-item")!.style.color = "blue";
      }
  };
  
  useEffect(() => {
    handleRoute();
  });

  return (
    <>
     <div className="header-nav-top"> 
      <Container>
     <div className="header-nav-top">
        <div className="same-nav-divs">
        <h2 className="nav-heading-logo">Entertainment-<span className="hub-span2">HUB</span></h2>
        </div>
        <div className="search-header-div same-nav-divs">
        <Link to="/trending" style={{color:"white"}}>
           <div>
           <i className="fa-solid fa-house fa-2x" id="trending-item"></i>
           </div>
           </Link>
           <Link to="/movies" style={{color:"white"}}>
           <div>
           <i className="fa-solid fa-film fa-2x" id="movies-item"></i>
           </div>
           </Link>
           <Link to="/tv-series" style={{color:"white"}}>
           <div>
           <i className="fa-solid fa-tv fa-2x" id="tv-series-item"></i>
           </div>
           </Link>
           <div>
           <i className="fa-solid fa-magnifying-glass fa-2x" id="search-item" ></i>
           </div>
        </div>
        <div className="same-nav-divs profile-div">
          <div>
            Profile
          </div>
        </div>
     </div>
     </Container>
     </div>
    </>
  );
};

export default Navbar;
