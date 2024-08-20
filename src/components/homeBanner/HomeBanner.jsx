
import Slider from "react-slick";

import { FaArrowRightLong } from "react-icons/fa6"; 

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import slider1 from "../../assets/slider/slider1.webp";
import slider2 from "../../assets/slider/slider2.webp";
import slider3 from "../../assets/slider/slider3.webp";
import { Link } from "react-router-dom";

const HomeBanner = () => {
 
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="py-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
                  <Slider {...settings}>
                    <div className="item">
                        <img src={slider1} alt="slider1" height={400} className="rounded my-custom-size" />
                       <div className="slide-content">
                         <div className="offer-part">
                           <h6> Exclusive offer </h6>
                           <p> - 20% off </p>
                         </div>
                         <div className="main-content">
                            <h1 className="entry-title"> A different kind of grocery store </h1>
                            <p> Only this week. Don’t miss... </p>
                          <div className="price-data">
                            <p> from </p>
                            <h1> $ 7.99 </h1>
                          </div>
                          <Link to="/shop"> Shop Now <FaArrowRightLong /></Link> 
                         </div>
                       </div>
                    </div>  
                    <div className="item">
                        <img src={slider2} alt="slider2" height={400} className="rounded my-custom-size" />
                        <div className="slide-content">
                         <div className="offer-part">
                           <h6> Exclusive offer </h6>
                           <p> - 40% off </p>
                         </div>
                         <div className="main-content">
                            <h1 className="entry-title"> Quality Freshness Guaranteed!  </h1>
                            <p> Only this week. Don’t miss... </p>
                          <div className="price-data">
                            <p> from </p>
                            <h1> $ 14.35 </h1>
                          </div>
                          <Link to="/shop"> Shop Now <FaArrowRightLong /></Link> 
                         </div>
                       </div>
                    </div>  
                    <div className="item">
                        <img src={slider3} alt="slider2" height={400} className="rounded my-custom-size" />
                        <div className="slide-content">
                         <div className="offer-part">
                           <h6> Exclusive offer </h6>
                           <p> - 20% off </p>
                         </div>
                         <div className="main-content">
                            <h1 className="entry-title"> Having the best quality products </h1>
                            <p> Only this week. Don’t miss... </p>
                          <div className="price-data">
                            <p> from </p>
                            <h1> $ 5.43 </h1>
                          </div>
                           <Link to="/shop"> Shop Now <FaArrowRightLong /></Link> 
                         </div>
                       </div>
                    </div>  
                </Slider>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeBanner



