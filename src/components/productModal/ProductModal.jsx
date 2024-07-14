
// react icons 
import { Dialog } from "@mui/material"
import { IoMdClose } from "react-icons/io"
import { CiHeart } from "react-icons/ci";
import { FaCodeCompare } from "react-icons/fa6";

import Rating from '@mui/material/Rating';

import { useContext, useRef } from "react";
import { MyContext } from "../../App";

import Slider from "react-slick";

// image zoom css 
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

import QuantityBox from "../quantityBox/QuantityBox";

import "./ProductModal.css"; 

const ProductModal = ({ closeProductModal }) => {
  const context = useContext(MyContext)

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
      <div>
        <Dialog  open={true} onClose={() => context.setIsOpenProductModal(false)} className="productModal">
          <div className="modal-top-part">
                <button className="close_btn" onClick={() => context.setIsOpenProductModal(false)}> <IoMdClose /> </button>
                <h3> All Natural Italian-Style Chicken Meatballs </h3>
                <div className="d-flex align-items-center"> 
                    <div className="brand d-flex align-items-center ">
                        <span> Brands </span>
                        <span className="ml-2"> <b> Welchs </b></span>
                    </div>
                    <Rating name="read-only" value={5} readOnly size="small"/>
                </div>
                <hr />
             <div>
               <div className="product-details-popup pt-3">
                  <div className="row">
                    <div className="col-md-5 ">
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

                    <div className="col-md-7">
                      <div className="product-content">
                        <div className="price-total">
                             <span className="delete-price"> $24.00 </span>
                            <span className="regular-price"> $19.50 </span>
                        </div>
                        <p className="stock"> In Stock </p>
                        <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus praesentium voluptate accusantium esse amet</p>
                        <div className="d-flex align-items-center gap-2">
                            <QuantityBox />
                           <button className="cart-btn"> Add To Cart </button>
                        </div>
                        <div className="wish-compare">
                            <button> <CiHeart /> Add To Wishlist </button>
                            <button> <FaCodeCompare /> compare </button>
                        </div>
                      </div>
                    </div>
               </div>
             </div>
            </div>
           </div>
         </Dialog>
      </div>
    </>
  )
}

export default ProductModal




