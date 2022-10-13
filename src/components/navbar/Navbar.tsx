import { Container } from "@mui/system";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
     <div className="header-nav-top"> 
      <Container>
     <div className="header-nav-top">
        <div className="same-nav-divs">
        <h2 className="nav-heading-logo">Entertainment-<span className="hub-span2">HUB</span></h2>
        </div>
        <div className="search-header-div same-nav-divs">
           <div>
           <i className="fa-solid fa-house fa-2x"></i>
           </div>
           <div>
           <i className="fa-solid fa-film fa-2x"></i>
           </div>
           <div>
           <i className="fa-solid fa-tv fa-2x"></i>
           </div>
           <div>
           <i className="fa-solid fa-magnifying-glass fa-2x"></i>
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
