import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/image/carousel1.jpg";
import image2 from "../../assets/image/carousel2.jpg";
import image3 from "../../assets/image/carousel3.jpg";

const Inspiration = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={image1} alt="image1" />
      </div>
      <div>
        <img src={image2} alt="image2" />
      </div>
      <div>
        <img src={image3} alt="image3" />
      </div>
    </Slider>
  );
};
export default Inspiration;
