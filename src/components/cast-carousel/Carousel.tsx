import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import config from "../../config/config.json";
import { useGetCarouselsQuery } from "../../redux/services/entertainment";
import "./carousel.css";

const Carousel = (props: any) => {
  const [credits, setCredits] = useState([]);
  const obj = {
    mediaType: props.mediaType,
    id:props.id
  }
  const responseInfo = useGetCarouselsQuery(obj);
  const handleDragStart = (e: any) => e.preventDefault();

  const items = credits?.map((val: any) => (
    <div className="carouselItem">
      <img
        src={
          val.profile_path
            ? `${config.POSTER_ROOT_PATH}${val?.profile_path}`
            : config.NO_PICTURE
        }
        alt={val?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />

      <a
        href={`${config.WIKIPEDIA_NAME_URL}${val?.name}`}
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
  
        setCredits(responseInfo?.data?.cast);
 
  }, [obj]);

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