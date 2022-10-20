import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import EditProfile from "../../components/profile/profile-edit/EditProfile";
import ProfileInfo from "../../components/profile/profile-info/ProfileInfo";
import "./profile.css";

const Profile: React.FC = () => {
  const [tempState,setTempState] = useState(true);

  const handleState = ():boolean => {
     setTempState(false)
     return tempState
  }
  const handleState2 = ():boolean => {
    setTempState(true)
    return tempState
 }

  return (
    <>
      <Navbar />
      <div className="profile-parent">
        <div>
          <img
            className="profile-page-img"
            src={
              "https://media.istockphoto.com/photos/compliance-with-internal-regulations-basic-rules-of-employees-in-the-picture-id1390249765?s=612x612"
            }
            alt="profile"
          />
        </div>
        <div className="profile-right-div">
          <div className="info-section-container">
            {
              tempState ? 
              <ProfileInfo handleState={handleState}/>
              :
              <EditProfile handleState={handleState2}/>
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
