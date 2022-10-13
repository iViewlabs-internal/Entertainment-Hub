import { Container } from "@mui/material";
import { forwardRef, useState } from "react";
import Login from "../../components/login/Login";
import Navbar from "../../components/navbar/Navbar";
import Signup from "../../components/sign-up/Signup";
import Footer from "../../components/footer/Footer";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import "./home.css";
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
  const [tempState, setTempState] = useState(false);
  const [upState, setUpState] = useState(false);

  const handleUpState = () => {
    setUpState(true);
  };
  const handleDownState = () => {
    setUpState(false);
  };
  const q1 = () => {
    if (tempState === false) {
      document.getElementById("ans-1")!.style.display = "block";
      document.getElementById("ans-2")!.style.display = "none";
      document.getElementById("ans-3")!.style.display = "none";
      document.getElementById("ans-4")!.style.display = "none";
      document.getElementById("ans-5")!.style.display = "none";
      document.getElementById("ans-6")!.style.display = "none";
      setTempState(true);
    } else {
      document.getElementById("ans-1")!.style.display = "none";
      setTempState(false);
    }
  };
  const q2 = () => {
    if (tempState === false) {
      document.getElementById("ans-2")!.style.display = "block";
      document.getElementById("ans-1")!.style.display = "none";
      document.getElementById("ans-3")!.style.display = "none";
      document.getElementById("ans-4")!.style.display = "none";
      document.getElementById("ans-5")!.style.display = "none";
      document.getElementById("ans-6")!.style.display = "none";
      setTempState(true);
    } else {
      document.getElementById("ans-2")!.style.display = "none";
      setTempState(false);
    }
  };
  const q3 = () => {
    if (tempState === false) {
      document.getElementById("ans-3")!.style.display = "block";
      document.getElementById("ans-2")!.style.display = "none";
      document.getElementById("ans-1")!.style.display = "none";
      document.getElementById("ans-4")!.style.display = "none";
      document.getElementById("ans-5")!.style.display = "none";
      document.getElementById("ans-6")!.style.display = "none";
      setTempState(true);
    } else {
      document.getElementById("ans-3")!.style.display = "none";
      setTempState(false);
    }
  };
  const q4 = () => {
    if (tempState === false) {
      document.getElementById("ans-4")!.style.display = "block";
      document.getElementById("ans-2")!.style.display = "none";
      document.getElementById("ans-3")!.style.display = "none";
      document.getElementById("ans-1")!.style.display = "none";
      document.getElementById("ans-5")!.style.display = "none";
      document.getElementById("ans-6")!.style.display = "none";
      setTempState(true);
    } else {
      document.getElementById("ans-4")!.style.display = "none";
      setTempState(false);
    }
  };
  const q5 = () => {
    if (tempState === false) {
      document.getElementById("ans-5")!.style.display = "block";
      document.getElementById("ans-2")!.style.display = "none";
      document.getElementById("ans-3")!.style.display = "none";
      document.getElementById("ans-4")!.style.display = "none";
      document.getElementById("ans-1")!.style.display = "none";
      document.getElementById("ans-6")!.style.display = "none";
      setTempState(true);
    } else {
      document.getElementById("ans-5")!.style.display = "none";
      setTempState(false);
    }
  };
  const q6 = () => {
    if (tempState === false) {
      document.getElementById("ans-6")!.style.display = "block";
      setTempState(true);
      document.getElementById("ans-2")!.style.display = "none";
      document.getElementById("ans-3")!.style.display = "none";
      document.getElementById("ans-4")!.style.display = "none";
      document.getElementById("ans-5")!.style.display = "none";
      document.getElementById("ans-1")!.style.display = "none";
    } else {
      document.getElementById("ans-6")!.style.display = "none";
      setTempState(false);
    }
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  return (
    <>
      <div className="home-parent-div">
        <div className="container-div">
          <Container>
            <div className="nav-head-div">
              <div className="nav-left-div">
                <h2 className="nav-logo-heading">
                  Entertainment-<span className="hub-span">HUB</span>
                </h2>
              </div>
              <div className="nav-right-div">
                <div className="nav-right-inner-div">
                  <p className="right-para">
                    <a href="#about-containt-div" className="anchor-para">
                      FAQ's
                    </a>
                  </p>
                  <p className="right-para right-para-about">About</p>
                  {/* <p className="right-para about-signup">Sign Up</p>
                <p className="right-para">Login</p> */}
                </div>
              </div>
            </div>
          </Container>
        </div>{" "}
        <Container>
          <div className="main-div-top">
            <div className="middle-containt-div">
              <div className="left-container-div">
                <h1 className="containt-des">
                  Unlimited movies, TV
                  <br />
                  <span className="span-des">shows and more.</span>
                </h1>
                <p className="para-des">Watch anywhere. Cancel anytime.</p>
                <p className="para-ready">
                  Ready to watch? Sign Up for free or Already a Member Then Just
                  Login.
                </p>
              </div>
              <div className="row-division-btn">
                <button className="login-btn-home" onClick={handleClickOpen2}>
                  Login
                </button>
                <p className="span-or">OR</p>
                <button className="signup-btn-home" onClick={handleClickOpen}>
                  Sign Up
                </button>
              </div>
              <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
              >
                <AppBar sx={{ position: "relative" }}>
                  <Toolbar>
                    <Typography
                      sx={{ ml: 2, flex: 1 }}
                      variant="h6"
                      component="div"
                    >
                      Register
                    </Typography>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleClose}
                      aria-label="close"
                    >
                      <CloseIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <Signup handleClickOpen2={handleClickOpen2} />
              </Dialog>
              <Dialog
                fullScreen
                open={open2}
                onClose={handleClose2}
                TransitionComponent={Transition}
              >
                <AppBar sx={{ position: "relative" }}>
                  <Toolbar>
                    <Typography
                      sx={{ ml: 2, flex: 1 }}
                      variant="h6"
                      component="div"
                    >
                      Login
                    </Typography>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleClose2}
                      aria-label="close"
                    >
                      <CloseIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <Login handleClickOpen={handleClickOpen} />
              </Dialog>
            </div>
          </div>
        </Container>
      </div>
      <hr className="hr-middle" />
      <div className="middle-sec-div">
        <Container>
          <div className="middle-sec-div">
            <div className="middle-left-div">
              <img
                className="dumy-picture"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt="dumy picture"
              />
            </div>
            <div className="middle-containte-div">
              <h1>Enjoy on your Desktop/Mobile</h1>
              <p className="para-smart-des">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, <br /> Apple
                TV, Blu-ray players and more.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <hr className="hr-middle" />
      <div className="bottom-containt-div">
        <Container>
          <div className="bottom-containt-div">
            <div className="bottom-left-div">
              <h1>Watch Everywhere/Anytime.</h1>
              <p className="para-stream">
                Stream unlimited movies and TV shows on your <br />
                phone, tablet, laptop, and TV.
              </p>
            </div>
            <div className="bottom-right-div">
              <img
                className="streaming-picture"
                src="https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWFtaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="dumy picture"
              />
            </div>
          </div>
        </Container>
      </div>
      <hr className="hr-middle" />
      <div className="about-containt-div">
        <Container>
          <div className="about-containt-div" id="about-containt-div">
            <div className="inner-top-head">
              <h1>Frequently Asked Questions</h1>
            </div>
            <div className="inner-about">
              <div className="heading-btn" onClick={q1}>
                <h3 className="heading-faq">-What is Entertainment-HUB?</h3>
                {tempState === false ? (
                  <i className="fa-solid fa-plus fa-2x"></i>
                ) : (
                  <i className="fa-solid fa-xmark fa-2x"></i>
                )}
              </div>
              <p className="para-faq-ans" id="ans-1">
                Entertainment-Hub is a streaming service that offers a wide
                variety of award-winning TV shows, movies, anime, documentaries
                and more – on thousands of internet-connected devices. You can
                watch as much as you want, whenever you want, without a single
                ad – all for one low monthly price. There's always something new
                to discover, and new TV shows and movies are added every week!
              </p>
              <div className="heading-btn" onClick={q2}>
                <h3 className="heading-faq">-How do i cancel?</h3>
                {tempState === false ? (
                  <i className="fa-solid fa-plus fa-2x"></i>
                ) : (
                  <i className="fa-solid fa-xmark fa-2x"></i>
                )}
              </div>
              <p className="para-faq-ans" id="ans-2">
                Entertainment-Hub is flexible. There are no annoying contracts
                and no commitments. You can easily cancel your account online in
                two clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
              <div className="heading-btn" onClick={q3}>
                <h3 className="heading-faq">-How much does It's Cost?</h3>
                {tempState === false ? (
                  <i className="fa-solid fa-plus fa-2x"></i>
                ) : (
                  <i className="fa-solid fa-xmark fa-2x"></i>
                )}
              </div>
              <p className="para-faq-ans" id="ans-3">
                Watch Entertainment-Hub on your smartphone, tablet, Smart TV,
                laptop, or streaming device, all for one fixed monthly fee.
                Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no
                contracts.
              </p>
              <div className="heading-btn" onClick={q4}>
                <h3 className="heading-faq">-Where i can whatch?</h3>
                {tempState === false ? (
                  <i className="fa-solid fa-plus fa-2x"></i>
                ) : (
                  <i className="fa-solid fa-xmark fa-2x"></i>
                )}
              </div>
              <p className="para-faq-ans" id="ans-4">
                Watch anywhere, anytime. Sign in with your Entertainment-Hub
                account to watch instantly on the web at Entertainment-Hub.com
                from your personal computer or on any internet-connected device
                that offers the Entertainment-Hub app, including smart TVs,
                smartphones, tablets, streaming media players and game consoles.
                You can also download your favourite shows with the iOS,
                Android, or Windows 10 app.
              </p>
              <div className="heading-btn" onClick={q5}>
                <h3 className="heading-faq">
                  -What i can watch on Entertainment-Hub
                </h3>
                {tempState === false ? (
                  <i className="fa-solid fa-plus fa-2x"></i>
                ) : (
                  <i className="fa-solid fa-xmark fa-2x"></i>
                )}
              </div>
              <p className="para-faq-ans" id="ans-5">
                Entertainment-Hub has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Entertainment-Hub
                originals, and more. Watch as much as you want, anytime you
                want.
              </p>
              <div className="heading-btn" onClick={q6}>
                <h3 className="heading-faq">
                  -Is Entertainment-Hub good for kids?
                </h3>
                {tempState === false ? (
                  <i className="fa-solid fa-plus fa-2x"></i>
                ) : (
                  <i className="fa-solid fa-xmark fa-2x"></i>
                )}
              </div>
              <p className="para-faq-ans" id="ans-6">
                The Entertainment-Hub Kids experience is included in your
                membership to give parents control while kids enjoy
                family-friendly TV shows and films in their own space. so it is
                good for kids as well.
              </p>
            </div>
          </div>
        </Container>
      </div>
      {/* <hr className="hr-middle" /> */}
      <Footer />
    </>
  );
};

export default Home;
