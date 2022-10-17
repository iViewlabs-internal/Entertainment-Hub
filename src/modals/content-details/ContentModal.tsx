import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from "../../components/cast-carousel/Carousel";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions"; 
import { forwardRef } from "react";
import "./contentModal.css";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContentModal = (props:any) => {
  return (
    <Dialog
        fullScreen
        open={props.open}
        onClose={props.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <h3>
                {props.title}({props.release_date ? props.release_date?.slice(0, 4) : props.first_air_date?.slice(0, 4)})
              </h3>
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
        <div className="modal-header-div">
          <div className="modal-inner-left">
            <div>
            <img
              src={`https://image.tmdb.org/t/p/w300${props.poster}`}
              alt={props.title}
              className="modal-item-img"
            />
            </div>
          </div>
          <div className="modal-inner-right">
            <div className="item-overview">
               <p className="overview-para">{props.overview}</p>
            </div>
            <div>
              <Carousel mediaType={props.mediaType} id={props.id}/>
            </div>
            <div>
              <button className="btn-video">
                <span>
              <i className="fa-brands fa-youtube fa-2x youtube-icon"></i>
                <a href={`https://www.youtube.com/results?search_query=${props.title}+trailer`} target="__blank" className="anchor-video"> 
                Watch the Trailer
                </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </Dialog>
  );
}

export default ContentModal;
