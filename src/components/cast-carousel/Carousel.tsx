import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import config from "../../config/config.json";

import "./carousel.css";

const mykey = process.env.REACT_APP_USER_API_KEY;
const Carousel = (props: any) => {
  const [credits, setCredits] = useState([]);

  const handleDragStart = (e: any) => e.preventDefault();

  const items = credits?.map((val: any) => (
    <div className="carouselItem">
      <img
        src={
          val.profile_path
            ? `https://image.tmdb.org/t/p/w300/${val.profile_path}`
            : config.NO_PICTURE
        }
        alt={val?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />

      <a
        href={`https://en.wikipedia.org/wiki/${val?.name}`}
        target="_blank"
        rel="noreferrer"
        className="anchor-single-img"
      >
        <b className="carouselItem__txt">{val?.name}</b>
      </a>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${props.mediaType}/${props.id}/credits?api_key=${mykey}&language=en-US`
    )
      .then((res) => res.json())
      .then((items) => {
        setCredits(items.cast);
      });
  }, [props.id, props.mediaType]);

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Carousel;