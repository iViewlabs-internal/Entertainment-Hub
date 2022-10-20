import "./signup.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  username: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
};
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
    password: Yup.string()
      .required()
      .required("*Password is required")
      .min(6, "*Password must be at least 6 characters")
      .max(40, "*Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required()
      .required("*Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "*Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "*Accept Terms is required"),
  })
  .required();

const Signup = (props: any) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    const register = {
      username: data.username,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
    };
    localStorage.setItem("register", JSON.stringify(register));
    toast.success("You Gets Registered Successfuly");
    setTimeout(() => {
      window.location.href = "/";
    },3000);
  };

  return (
    <>
    <ToastContainer autoClose={3000} />
      <div className="signup-header-div">
        <div className="register-img-div">
          <img
            className="register-img"
            src="https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="register demo"
          />
        </div>
        <div className="register-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Your Username"
                {...register("username")}
                className="input-fields"
              />
              <div className="invalid-feedback">{errors.username?.message}</div>

              <br />
            </div>
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
                type="number"
                placeholder="Your Mobile no."
                {...register("mobile")}
                className="input-fields last-inpt"
              />
              <div className="invalid-feedback">{errors.mobile?.message}</div>

              <br />
            </div>
            <div>
              <input
                type="password"
                placeholder="Your Password"
                {...register("password")}
                className="input-fields"
              />

              <div className="invalid-feedback">{errors.password?.message}</div>
              <br />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className="input-fields last-inpt"
              />
              <div className="invalid-feedback">
                {errors.confirmPassword?.message}
              </div>
              <br />
            </div>
            <div>
              <button type="submit" className="signup-btn">
                Register
              </button>
            </div>
            <div className="login-sec">
              <span className="account-des">
                Already have an account ?{" "}
                <span className="login-link" onClick={props.handleClickOpen2}>
                  Login
                </span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
