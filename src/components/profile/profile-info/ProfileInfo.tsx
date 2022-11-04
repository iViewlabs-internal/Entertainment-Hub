import { useNavigate } from "react-router-dom";
import "./profileInfo.css";

interface gpd {
  handleState(): boolean;
}
const ProfileInfo: React.FC<gpd> = (props) => {
  const registeredUser: any = localStorage.getItem("register");
  const userInfo = JSON.parse(registeredUser);
const navigate = useNavigate()
   const resetPage = ()=>{
      navigate("/reset-password")
   }
  return (
    <>
      <h2 style={{ marginBottom: "0%", paddingBottom: "0%" }}>User Profile</h2>

      <div className="info-div-parent">
        <div className="info-div1">
          <h3>Username:</h3>
          <h3>User Email:</h3>
          <h3>Mobile No.:</h3>
        </div>
        <div className="div2-info">
          <h3 className="info-details">{userInfo?.username}</h3>
          <h3 className="info-details">{userInfo?.email}</h3>
          <h3 className="info-details">{userInfo?.mobile}</h3>
        </div>
      </div>
      <div className="info-div-btn">
        {/* <Link to="edit"> */}
        <button onClick={props.handleState}>Edit Info</button>
        {/* </Link> */}
        <button onClick={resetPage}>Reset Password</button>
      </div>
    </>
  );
};

export default ProfileInfo;
