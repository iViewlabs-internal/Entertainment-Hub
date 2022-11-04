import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./resetPass.css";
import { useNavigate } from "react-router-dom";

type Inputs = {
  oldPassword:string,
  newPassword: string;
  confirmPassword: string;
};
const validationSchema = Yup.object()
  .shape({
    oldPassword: Yup.string()
      .required()
      .required("*Old Password is required")
      .min(6, "*Password must be at least 6 characters")
      .max(15, "*Password must not exceed 15 characters"),
    newPassword: Yup.string()
      .required()
      .required("*New Password is required")
      .min(6, "*Password must be at least 6 characters")
      .max(15, "*Password must not exceed 15 characters"),
    confirmPassword: Yup.string()
      .required()
      .required("*Confirm Password is required")
      .oneOf([Yup.ref("newPassword"), null], "*Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "*Accept Terms is required"),
  })
  .required();

const ResetPass = () => {
  const navigate = useNavigate();
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
    if (data.oldPassword === myData.password) {
      const register = {
        username: myData.username,
        email: myData.email,
        mobile: myData.mobile,
        password: data.newPassword,
      };
      localStorage.setItem("register", JSON.stringify(register));
      toast.success("Password Has Been Changed Successfuly");
      setTimeout(() => {
        navigate("/profile")
      }, 3000);
    } else {
      toast.error("Old Password is Mismatching!");
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
                type="password"
                placeholder="Old Password"
                {...register("oldPassword")}
                className="inpt-reset-fields"
              />
                <i className="fa-solid fa-eye"></i>
         
              <div className="invalid-feedback">{errors.oldPassword?.message}</div>
              <br />
            </div>
            <div>
              <input
                type="password"
                placeholder="New Password"
                {...register("newPassword")}
                className="inpt-reset-fields"
              />

              <div className="invalid-feedback">{errors.newPassword?.message}</div>
              <br />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm new Password"
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
