import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./resetPass.css";

type Inputs = {
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
};
const validationSchema = Yup.object()
  .shape({
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

const ResetPass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    const storedData: any = localStorage.getItem("register");
    const myData = JSON.parse(storedData);
    if (data.email === myData.email && data.mobile === myData.mobile) {
      const register = {
        username: myData.username,
        email: myData.email,
        mobile: myData.mobile,
        password: data.password,
      };
      localStorage.setItem("register", JSON.stringify(register));
      toast.success("Password Has Been Changed Successfuly");
      setTimeout(() => {
        //   props.handleClose();
      }, 3000);
    } else {
      toast.error("Email or Mobile No. is Mismatching!");
    }
  };
  return (
    <>
      <Navbar />
      <div className="reset-header-div">
        <div className="reset-inner-left-div">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Your Email"
                {...register("email")}
                className="inpt-reset-fields"
              />
              <div className="invalid-feedback">{errors.email?.message}</div>

              <br />
            </div>
            <div>
              <input
                type="number"
                placeholder="Your Mobile no."
                {...register("mobile")}
                className="inpt-reset-fields"
              />
              <div className="invalid-feedback">{errors.mobile?.message}</div>

              <br />
            </div>
            <div>
              <input
                type="password"
                placeholder="Your Password"
                {...register("password")}
                className="inpt-reset-fields"
              />

              <div className="invalid-feedback">{errors.password?.message}</div>
              <br />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className="inpt-reset-fields"
              />
              <div className="invalid-feedback">
                {errors.confirmPassword?.message}
              </div>
              <br />
            </div>
            <div>
              <button type="submit" className="reset-submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="reset-inner-right-div">
          <img
            src="https://image.shutterstock.com/image-illustration/3d-illustration-computer-keyboard-print-260nw-528632875.jpg"
            alt="reset"
            className="img-reset-pass"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetPass;
