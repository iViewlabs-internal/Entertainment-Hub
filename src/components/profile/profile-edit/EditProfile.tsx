import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./editProfile.css";
import { useNavigate } from "react-router-dom";

type Inputs = {
  username: string;
  email: string;
  mobile: string;
  password: string;
};
interface gpd2{
  handleState(): boolean;
}
const validationSchema = Yup.object()
  .shape({
    username: Yup.string()
      .required()
      .required("*Username is required")
      .min(3, "*Username must be at least 3 characters")
      .max(15, "*Username must not exceed 20 characters"),
    email: Yup.string()
      .required("*Email is required")
      .email("*Email is invalid"),
    mobile: Yup.string()
      .required()
      .required("*Mobile number is required")
      .min(10, "*Mobile no. must be at least 10 characters")
      .max(15, "*Mobile no. must not exceed 12 characters"),
  })
  .required();
const EditProfile:React.FC<gpd2> = (props) => {
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: any) => {
    const storedData: any = localStorage.getItem("register");
    const parsedStoredData = JSON.parse(storedData);
    const register = {
      username: data.username,
      email: data.email,
      mobile: data.mobile,
      password: parsedStoredData.password,
    };
    localStorage.setItem("register", JSON.stringify(register));
    toast.success("profile Updated Successfuly");
    props.handleState()
    // setTimeout(() => {
    //   navigate("/profile")
    // }, 3000);
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div>
        <h2 className="user-profile-h">Edit User Profile</h2>
      </div>
      <div className="info-parent-div">
        <div className="info-div2">
          <form onSubmit={handleSubmit(onSubmit)} id="info-div2">
            <div className="input-fields-div">
              <h3 className="user-name">Username:</h3>
              <input
                type="text"
                placeholder="Your Username"
                {...register("username")}
                className="input-fields2 one"
              />
              <div className="invalid-feedback">{errors.username?.message}</div>

              <br />
            </div>
            <div className="input-fields-div email">
              <h3 className="user-name">User Email:</h3>
              <input
                type="text"
                placeholder="Your Email"
                {...register("email")}
                className="input-fields2 two"
              />
              <div className="invalid-feedback">{errors.email?.message}</div>

              <br />
            </div>
            <div className="input-fields-div email">
              <h3 className="user-name">Mobile No.:</h3>
              <input
                type="number"
                placeholder="Your Mobile no."
                {...register("mobile")}
                className="input-fields2 last-inpt2"
              />
              <div className="invalid-feedback">{errors.mobile?.message}</div>

              <br />
            </div>
            <div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
