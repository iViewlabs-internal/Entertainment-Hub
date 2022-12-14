import { Container } from "@mui/material";
import "./footer.css";
import { useLocation, useNavigate } from "react-router-dom";
import { getYear } from "../../utils";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="footer-head-div">
        <Container>
          <div className="footer-inner-first">
            <div className="para-div-footer">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
            </div>
            <div className="inner-footer-div-sec">
              <div className="inner-divs-same">Terms</div>
              <div className="inner-divs-same">Privacy</div>
            </div>
            <div className="inner-footer-div-sec">
              <div
                className="inner-divs-same about"
                onClick={() => {
                  navigate("/about");
                }}
              >
                About Entertainment-HUB
              </div>
              <div className="inner-divs-same">Contact Us</div>
              <div className="inner-divs-same">
                {location.pathname !== "/" ? (
                  <a href="/#about-containt-div" className="faq-link">
                    FAQs
                  </a>
                ) : (
                  <a href="#about-containt-div" className="faq-link">
                    FAQs
                  </a>
                )}
              </div>
            </div>
            <div className="header-parent-div">
              <div className="header-inner-div-first">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-google-plus-g"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="header-inner-div-second">
                <div className="inner-second-header">
                  <div>
                    <i className="fa-solid fa-mobile font-icon-middle"></i>
                  </div>
                  <div>
                    <i className="fa-solid fa-envelope font-icon-middle"></i>
                  </div>
                </div>
                <div className="right-font-icon-div">
                  <div className="items">7697150410</div>
                  <div className="items">sagar.jhode@iviewlabs.net</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bottom-footer-header">
        <Container>
          <p className="text-light mt-3">
            Copyright &#169; {getYear()} Iview Labs Pvt Ltd. All Rights Reserved
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
