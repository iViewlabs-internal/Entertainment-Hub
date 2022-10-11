import { Container } from "@mui/material";
import Login from "../../components/login/Login";
import Navbar from "../../components/navbar/Navbar";
import Signup from "../../components/sign-up/Signup";

import "./home.css";

const Home = () => {
  return (
     <>
         <div className="home-parent-div">
          <Navbar/>
          <Container>
          <div className="middle-containt-div">
            <div className="left-container-div">
               <h1 className="containt-des">Unlimited movies, TV<br/><span className="span-des">shows and more.</span></h1>
               <p className="para-des">Watch anywhere. Cancel anytime.</p>
            </div>
            <div>
               <Signup/>
               {/* <Login/> */}
            </div>
           </div>
          </Container>
         </div>
             <hr className="hr-middle"/>
            <div className="middle-sec-div">
         <Container>
            <div className="middle-sec-div">
               <div className="middle-containte-div middle-left-div">
                  <h1>Enjoy on your Desktop/Mobile</h1>
                  <p className="para-smart-des">Watch on smart TVs, PlayStation, Xbox,<br/> Chromecast, Apple TV, Blu-ray players and<br/> more.</p>
               </div>
               <div className="middle-containte-div">
                
               </div>
               </div>
         </Container>
            </div>
     </>
  );
}

export default Home;
