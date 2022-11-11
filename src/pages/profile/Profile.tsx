import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import EditProfile from "../../components/profile/profile-edit/EditProfile";
import ProfileInfo from "../../components/profile/profile-info/ProfileInfo";
import config from "../../config/config.json";

import "./profile.css";

const Profile: React.FC = () => {
  const [tempState, setTempState] = useState(true);

  const handleState = (): boolean => {
    setTempState(false);
    return tempState;
  };
  const handleState2 = (): boolean => {
    setTempState(true);
    return tempState;
  };

  return (
    <>
      <Navbar handle={handleState2} />
      <div className="profile-parent">
        <div className="profile-left-div">
          <img
            className="profile-page-img"
            src={config.PROFILE_DUMY_PICTURE}
            alt="profile"
          />
        </div>
        <div className="profile-right-div">
          <div className="info-section-container">
            {tempState ? (
              <ProfileInfo handleState={handleState} />
            ) : (
              <EditProfile handleState={handleState2} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;