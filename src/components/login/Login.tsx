import "./login.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

type Inputs = {
  username: string;
  password: string;
};
const validationSchema = Yup.object()
  .shape({
    username: Yup.string()
      .required()
      .required("*Username is required")
      .min(3, "*Username must be at least 3 characters")
      .max(15, "*Username must not exceed 20 characters"),
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
    if (
      parsedData.username === data.username &&
      parsedData.password === data.password
    ) {
      navigate("/trending");
    } else {
      alert("no");
    }
  };

  return (
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
                placeholder="Your Username"
                {...register("username")}
                className="input-fields-login inpt-login-one"
              />
              <div className="invalid-feedback">{errors.username?.message}</div>

              <br />
            </div>
            <div>
              <input
                type="password"
                placeholder="Your Password"
                {...register("password")}
                className="input-fields-login"
              />

              <div className="invalid-feedback">{errors.password?.message}</div>
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
                <p className="forgott-pass">Forgot Password?</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
