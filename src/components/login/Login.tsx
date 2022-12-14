import "./login.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ForgotPass from "../../modals/forgot-pass/forgotPass";
import { useState } from "react";
import config from "../../config/config.json";

type Inputs = {
  email: string;
  password: string;
};
const validationSchema = Yup.object()
  .shape({
    email: Yup.string()
      .required("*Email is required")
      .email("*Email is invalid"),
    password: Yup.string()
      .required()
      .required("*Password is required")
      .min(6, "*Password must be at least 6 characters")
      .max(15, "*Password must not exceed 15 characters"),
  })
  .required();

const Login = (props: any) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    const registerData: any = localStorage.getItem("register");
    const parsedData = JSON.parse(registerData);
    if (!data.email || !data.password) {
      toast.error("Fields are empty!");
    } else if (parsedData.email !== data.email) {
      toast.error("Invalid username!");
    } else if (parsedData.password !== data.password) {
      toast.error("Invalid Password!");
    } else if (
      parsedData.email === data.email &&
      parsedData.password === data.password
    ) {
      toast.success("Logged In Successfuly!");
      setTimeout(() => {
        navigate("/trending");
      }, 3000);
    } else {
      toast.error("Invailid Entries!");
    }
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="login-header-div">
        <div className="login-form">
          <div className="img-div-lock">
            <img
              className="login-lock"
              src={config.LOGIN_PICTURE}
              alt="login pic"
            />
          </div>
          <div className="login-form-container">
          
            <form onSubmit={handleSubmit(onSubmit)} className="form-class">
              <div>
                <input
                  type="text"
                  placeholder="Your Email"
                  {...register("email")}
                  className="login-input"
                />
                <div className="invalid-feedback">{errors.email?.message}</div>

                <br />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  {...register("password")}
                  className="login-input"
                />

                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
                <br />
              </div>
              <div>
                <button type="submit" className="login-btn">
                  Login
                </button>
              </div>
              <div className="register-sec">
                <div>
                  <span className="account-des-login">
                    Don't have any account ?{" "}
                    <span
                      className="register-link"
                      onClick={props.handleClickOpen}
                    >
                      Register
                    </span>
                  </span>
                </div>
                <div>
                  <p className="forgott-pass" onClick={handleOpen}>
                    Forgot Password?
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ForgotPass
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      />
    </>
  );
};

export default Login;