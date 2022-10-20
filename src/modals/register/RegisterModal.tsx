import Signup from "../../components/sign-up/Signup";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const RegisterModal = (props:any) => {
  return (
    <>
    <Dialog
                fullScreen
                open={props.open}
                onClose={props.handleClose}
                TransitionComponent={Transition}
              >
                <AppBar sx={{ position: "relative" }}>
                  <Toolbar>
                    <Typography
                      sx={{ ml: 2, flex: 1 }}
                      variant="h6"
                      component="div"
                    >
                      Register
                    </Typography>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={props.handleClose}
                      aria-label="close"
                    >
                      <CloseIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <Signup handleClickOpen2={props.handleClickOpen2} />
              </Dialog></>
  );
}

export default RegisterModal;
