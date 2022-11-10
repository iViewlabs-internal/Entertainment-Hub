import { Container } from "@mui/material";
import { useState } from "react";
import "./home.css";
import RegisterModal from "../../modals/register/RegisterModal";
import LoginModal from "../../modals/login/LoginModal";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [tempState, setTempState] = useState(false);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  const [state6, setState6] = useState(false);
  
  const handleQ1 = () => {
    if (tempState === false) {
      document.getElementById("ans-1")!.style.display = "block";
      document.getElementById("ans-2")!.style.display = "none";
      document.getElementById("ans-3")!.style.display = "none";
      document.getElementById("ans-4")!.style.display = "none";
      document.getElementById("ans-5")!.style.display = "none";
      document.getElementById("ans-6")!.style.display = "none";
      setTempState(true);
      setState1(true);
    } else {
      document.getElementById("ans-1")!.style.display = "none";
      setTempState(false);
      setState1(false);
    }
  };
  const handleQ2 = () => {
    if (tempState === false) {
      document.getElementById("ans-2")!.style.display = "block";
      document.getElementById("ans-1")!.style.display = "none";
      document.getElementById("ans-3")!.style.display = "none";
      document.getElementById("ans-4")!.style.display = "none";
      document.getElementById("ans-5")!.style.display = "none";
      document.getElementById("ans-6")!.style.display = "none";
      setTempState(true);
      setState2(true);
    } else {
      document.getElementById("ans-2")!.style.display = "none";
      setState2(false);
      setTempState(false);
    }
  };
  const handleQ3 = () => {
    if (tempState === false) {
      document.getElementById("ans-3")!.style.display = "block";
      document.getElementById("ans-2")!.style.display = "none";
      document.getElementById("ans-1")!.style.display = "none";
      document.getElementById("ans-4")!.style.display = "none";
      document.getElementById("ans-5")!.style.display = "none";
      document.getElementById("ans-6")!.style.display = "none";
      setTempState(true);
      setState3(true);
    } else {
      document.getElementById("ans-3")!.style.display = "none";
      setTempState(false);
      setState3(false);
    }
  };
  const handleQ4 = () => {
    if (tempState === false) {
      document.getElementById("ans-4")!.style.display = "block";
      document.getElementById("ans-2")!.style.display = "none";
      document.getElementById("ans-3")!.style.display = "none";
      document.getElementById("ans-1")!.style.display = "none";
      document.getElementById("ans-5")!.style.display = "none";
      document.getElementById("ans-6")!.style.display = "none";
      setTempState(true);
      setState4(true);
    } else {
      document.getElementById("ans-4")!.style.display = "none";
      setTempState(false);
      setState4(false);
    }
  };
  const handleQ5 = () => {
    if (tempState === false) {
      document.getElementById("ans-5")!.style.display = "block";
      document.getElementById("ans-2")!.style.display = "none";
      document.getElementById("ans-3")!.style.display = "none";
      document.getElementById("ans-4")!.style.display = "none";
      document.getElementById("ans-1")!.style.display = "none";
      document.getElementById("ans-6")!.style.display = "none";
      setTempState(true);
      setState5(true);
    } else {
      document.getElementById("ans-5")!.style.display = "none";
      setTempState(false);
      setState5(false);
    }
  };
  const handleQ6 = () => {
    if (tempState === false) {
      document.getElementById("ans-6")!.style.display = "block";
      setTempState(true);
      setState6(true);
      document.getElementById("ans-2")!.style.display = "none";
      document.getElementById("ans-3")!.style.display = "none";
      document.getElementById("ans-4")!.style.display = "none";
      document.getElementById("ans-5")!.style.display = "none";
      document.getElementById("ans-1")!.style.display = "none";
    } else {
      document.getElementById("ans-6")!.style.display = "none";
      setState6(false);
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
        <img
          className="temp"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/383fc36a-aa04-4dfd-95a0-a4b71bc21eed/IN-en-20221003-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
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
              <RegisterModal
                open={open}
                handleClose={handleClose}
                handleClickOpen2={handleClickOpen2}
              />
              <LoginModal
                open2={open2}
                handleClose2={handleClose2}
                handleClickOpen={handleClickOpen}
              />
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
                alt="dumy"
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
                alt="dumy"
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
              <div className="heading-btn" onClick={handleQ1}>
                <h3 className="heading-faq">-What is Entertainment-HUB?</h3>
                {state1 === false ? (
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
              <div className="heading-btn" onClick={handleQ2}>
                <h3 className="heading-faq">-How do i cancel?</h3>
                {state2 === false ? (
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
              <div className="heading-btn" onClick={handleQ3}>
                <h3 className="heading-faq">-How much does It's Cost?</h3>
                {state3 === false ? (
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
              <div className="heading-btn" onClick={handleQ4}>
                <h3 className="heading-faq">-Where i can whatch?</h3>
                {state4 === false ? (
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
              <div className="heading-btn" onClick={handleQ5}>
                <h3 className="heading-faq">
                  -What i can watch on Entertainment-Hub
                </h3>
                {state5 === false ? (
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
              <div className="heading-btn" onClick={handleQ6}>
                <h3 className="heading-faq">
                  -Is Entertainment-Hub good for kids?
                </h3>
                {state6 === false ? (
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
      <Footer />
    </>
  );
};

export default Home;