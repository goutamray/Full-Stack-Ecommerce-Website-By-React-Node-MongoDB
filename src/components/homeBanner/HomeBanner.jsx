
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import slider1 from "../../assets/slider/slider1.jpg"
import slider2 from "../../assets/slider/slider2.jpg"

const HomeBanner = () => {
 
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="py-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9">
                  <Slider {...settings}>
                    <div className="item">
                        <img src={slider1} alt="slider1" height={350} className="rounded" />
                    </div>  
                    <div className="item">
                        <img src={slider2} alt="slider2" height={350} className="rounded" />
                    </div>  
                </Slider>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeBanner



