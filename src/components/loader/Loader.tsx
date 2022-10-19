import { ThreeCircles } from "react-loader-spinner";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-head">
      <ThreeCircles
        height="60"
        width="50"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loader;
