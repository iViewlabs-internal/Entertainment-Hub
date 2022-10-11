import { Container } from "@mui/material";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-div">
        <Container>
          <div className="nav-head-div">
            <div className="nav-left-div">
              <h2 className="nav-logo-heading">Entertainment-HUB</h2>
            </div>
            <div className="nav-right-div">
              <div className="nav-right-inner-div">
                <p className="right-para about-signup">About</p>
                <p className="right-para about-signup">Sign Up</p>
                <p className="right-para">Login</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
