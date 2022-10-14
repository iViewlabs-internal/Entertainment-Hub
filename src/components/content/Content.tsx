import { Grid } from "@mui/material";
import "./content.css";

const Content = (props:any) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className="style-containt">
       <div className="img-containt-div">
         <img src={`https://image.tmdb.org/t/p/w300${props.poster}`} alt={props.title} className="content-img"/>
       </div>
       <div className="para-containt-div">
        <div className="inner-para-containt-div">
        <p className="para-content-title"> {props.mediaType === "tv" ? "TV Series" : "Movie"}</p>
        </div>
        <div className="inner-para-containt">
        <p className="para-content-title">{props.title.slice(0,20)}</p>
        </div>
       </div>
       </div>
    </Grid>
  );
}

export default Content;
