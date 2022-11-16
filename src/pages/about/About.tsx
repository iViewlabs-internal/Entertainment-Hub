import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import config from "../../config/config.json";
import Footer from "../../components/footer/Footer";
import "./about.css";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="about-nav-header">
        <Container>
          <div className="about-nav-header">
            <div>
              <h3>About Entertainment-HUB</h3>
            </div>
            <div>
              <h3
                className="home-btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </h3>
            </div>
          </div>
        </Container>
      </div>
      <div className="about-middle-sec">
        <Container>
          <div className="about-middle-sec">
            <div className="about-middle-left">
              <p>
                At Entertainment-HUB, we want to entertain the world. Whatever
                your taste, and no matter where you live, we give you access to
                best-in-class TV series, documentaries, feature films. Our
                members control what they want to watch, when they want it, with
                no ads, in one simple subscription. We’re streaming in more than
                10 languages and almost all the countries, because great stories
                can come from anywhere and be loved everywhere. We are the
                world’s biggest fans of entertainment, and we’re always looking
                to help you find your next favorite story.
              </p>
              <p className="about-author-para">~Team Entertainment-HUB</p>
            </div>
            <div className="about-middle-right">
              <img src={config.ABOUT_HEAD_PICTURE} alt="about" />
            </div>
          </div>
        </Container>
      </div>
      <div className="about-bottom-sec">
        <Container>
          <div className="about-bottom-sec">
            <div className="about-bottom-left">
              <img
                className="career-img"
                src={config.ABOUT_CAREER_PICTURE}
                alt="carrers"
              />
            </div>
            <div className="about-bottom-right">
              <h1>Careers</h1>
              <p>
                Want to come work with us? Get more information about our teams,
                locations, culture and to hear more from our employees.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="about-bottom-se">
        <Container>
          <div className="about-bottom-se">
            <div className="about-bottom-r">
              <h1>Our Culture</h1>
              <p>
                At Entertainment-HUB, we have an amazing and unique employee
                culture. Find out first-hand what it’s really like to work here,
                and to learn more about our company values.
              </p>
              <span>
                Great entertainment thrills and inspires. It sparks laughter,
                tears, gasps and sighs, stirring our emotions and nourishing our
                spirit. Ever since humans learned to speak, storytelling has
                been essential to our happiness.
              </span>
            </div>
            <div className="about-bottom-l">
              <img
                className="culture-img"
                src={config.ABOUT_CULTURE_PICTURE}
                alt="culture"
              />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default About;