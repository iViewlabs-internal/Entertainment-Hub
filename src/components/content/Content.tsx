import "./content.css";

const Content = (props:any) => {
  return (
    <div className="content-top-div">
       <div className="img-containt-div">
         <img src={`https://image.tmdb.org/t/p/w300${props.poster}`} alt={props.title} className="content-img"/>
       </div>
       <div className="para-containt-div">
        <div className="inner-para-containt-div">
        <p className="para-content-title"> {props.mediaType === "tv" ? "TV Series" : "Movie"}</p>
        </div>
        <div className="inner-para-containt">
        <p className="para-content-title">{props.title}</p>
        </div>
       </div>
    </div>
  );
}

export default Content;
