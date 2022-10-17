import { Badge, Grid } from "@mui/material";
import "./content.css";
import { useState } from "react";
import ContentModal from "../../modals/content-details/ContentModal";

const Content = (props: any) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        {/* <Badge
          badgeContent={props.vote_average}
          color={props.vote_average > 6 ? "primary" : "secondary"}
        > */}
          <div className="style-containt" onClick={handleClickOpen}>
            <div className="img-containt-div">
              <img
                src={`https://image.tmdb.org/t/p/w300${props.poster}`}
                alt={props.title}
                className="content-img"
              />
            </div>
            <div className="para-containt-div">
              <div className="inner-para-containt-div">
                <p className="para-content-title">
                  {" "}
                  {props.mediaType === "tv" ? "TV Series" : "Movie"}
                </p>
              </div>
              <div className="inner-para-containt">
                <p className="para-content-title">
                  {props.title.length > 20 ? `${props.title.slice(0, 20)}...` : props.title}
                </p>
              </div>
            </div>
          </div>
        {/* </Badge> */}
      </Grid>
      <ContentModal
        handleClose={handleClose}
        open={open}
        title={props.title}
        overview={props.overview}
        poster={props.poster}
        mediaType={props.mediaType}
        id={props.id}
        release_date={props.release_date}
        first_air_date={props.first_air_date}
      />
    </>
  );
};

export default Content;
