import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            style={{ width: "100%" }}
            className="d-block w-100"
            src="myphoto/ninja.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            style={{ width: "100%" }}
            className="d-block w-100"
            src="myphoto/bbq.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            style={{ width: "100%" }}
            className="d-block w-100"
            src="myphoto/set.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Banner;
