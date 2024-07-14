import { useRef } from "react";


import Slider from "react-slick";

// image zoom css 
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';


const ProductZoom = () => {

  const zoomSliderBig = useRef(); 
  const zoomSlider = useRef(); 

  
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade : false,
    arrows : true
  };

  let settings2 = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade : false,
    arrows : false 
  };

  // click to change images
  const goto = ( index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);

  };

  return (
    <>
      <div className="productZoom">
          <div className="product-zoom-box">
                          <div className="discount-pro">
                             <span> 20% </span>
                          </div>
                       <Slider {...settings2} className="product-galary-slider-big" ref={zoomSliderBig}>    
                                   
                               <div className="item" >
                                    <div className="product-zoom">
                                        <InnerImageZoom zoomType="hover" zoomScale= "1"  src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}  /> 
                                        
                                  </div>
                                </div>                           
                               <div className="item" >
                                    <div className="product-zoom">
                                        <InnerImageZoom zoomType="hover" zoomScale= "1"  src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg`}  /> 
                                  </div>
                                </div>                           
                               <div className="item" >
                                    <div className="product-zoom">
                                        <InnerImageZoom zoomType="hover" zoomScale= "1"  src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg`}  /> 
                                  </div>
                                </div>                           
                            </Slider>
                       </div>
                     {/*galary image start  */}
                      <div className="zoom-galary">
                        <Slider {...settings} className="product-galary-slider" ref={zoomSlider}>
                          <div className="item" >
                              <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} alt="zoom" onClick={() => goto(0)}/>
                          </div>
                          <div className="item" >
                              <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg`} alt="zoom" onClick={() => goto(1)} />
                          </div>
                          <div className="item" >
                              <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg`} alt="zoom" onClick={() => goto(2)} />
                          </div>
                          
                       </Slider>
                      </div>
      </div>
    </>
  )
}

export default ProductZoom





