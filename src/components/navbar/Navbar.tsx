import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import "./navbar.css";
import { Button, Menu, MenuItem } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

const Navbar = (props: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleRoute = () => {
    if (location.pathname === "/trending") {
      document.getElementById("trending-item")!.style.color = "blue";
    } else if (location.pathname === "/movies") {
      document.getElementById("movies-item")!.style.color = "blue";
    } else if (location.pathname === "/tv-series") {
      document.getElementById("tv-series-item")!.style.color = "blue";
    } else if (location.pathname === "/search") {
      document.getElementById("search-item")!.style.color = "blue";
    }
  };

  useEffect(() => {
    handleRoute();
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const loggedOut = () => {
    toast.success("Logged Out Successfuly!");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="header-nav-top">
        <Container>
          <div className="header-nav-top">
            <div className="same-nav-divs">
              <h2 className="nav-heading-logo">
                Entertainment-<span className="hub-span2">HUB</span>
              </h2>
            </div>
            <div className="search-header-div">
              <Link to="/trending" style={{ color: "white" }}>
                <div>
                  <i className="fa-solid fa-house fa-2x" id="trending-item"></i>
                </div>
              </Link>
              <Link to="/movies" style={{ color: "white" }}>
                <div>
                  <i className="fa-solid fa-film fa-2x" id="movies-item"></i>
                </div>
              </Link>
              <Link to="/tv-series" style={{ color: "white" }}>
                <div>
                  <i className="fa-solid fa-tv fa-2x" id="tv-series-item"></i>
                </div>
              </Link>
              <Link to="/search" style={{ color: "white" }}>
                <div>
                  <i
                    className="fa-solid fa-magnifying-glass fa-2x"
                    id="search-item"
                  ></i>
                </div>
              </Link>
            </div>
            <div className="same-nav-divs profile-div">
              <div>
                <Button
                  id="basic-button"
                  className="profile-icon"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <div>
                    <CgProfile className="profile-icon" />
                  </div>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <Link
                    to="/profile"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        props.handle();
                      }}
                    >
                      Profile
                    </MenuItem>
                  </Link>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      loggedOut();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;