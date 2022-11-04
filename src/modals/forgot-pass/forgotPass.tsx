import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./forgotPass.css";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};
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

export default function SpringModal(props: any) {
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
          props.handleClose();
        }, 3000);
    }else{
        toast.error("Email or Mobile No. is Mismatching!");
    }
  };
  return (
    <div>
        <ToastContainer autoClose={3000} />
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <div className="header-content-forgot">
                <div>
                    <h2>Forgot Password</h2>
                </div>
                <div className="close-icon-div">
                <IconButton
              edge="start"
              color="inherit"
              onClick={props.handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
                </div>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Email"
                    {...register("email")}
                    className="inpt-fields"
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>

                  <br />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Your Mobile no."
                    {...register("mobile")}
                    className="inpt-fields"
                  />
                  <div className="invalid-feedback">
                    {errors.mobile?.message}
                  </div>

                  <br />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Your Password"
                    {...register("password")}
                    className="inpt-fields"
                  />

                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                  <br />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                    className="inpt-fields"
                  />
                  <div className="invalid-feedback">
                    {errors.confirmPassword?.message}
                  </div>
                  <br />
                </div>
                <div>
                  <button type="submit" className="forgot-btn">Submit</button>
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
