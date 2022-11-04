import "./login.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ForgotPass from "../../modals/forgot-pass/forgotPass";
import { useState } from "react";

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
      .max(40, "*Password must not exceed 40 characters"),
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
      toast.error("Invailid username!");
    } else if (parsedData.password !== data.password) {
      toast.error("Invailid Password!");
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
              src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="login pic"
            />
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-class">
              <div>
                <input
                  type="text"
                  placeholder="Your Email"
                  {...register("email")}
                  className="input-fields"
                />
                <div className="invalid-feedback">{errors.email?.message}</div>

                <br />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  {...register("password")}
                  className="input-fields-login"
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