import HomeBanner from "../../components/homeBanner/HomeBanner"
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

import product from "../../assets/banner/product.jpg"
import Rating from '@mui/material/Rating';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


import "./Home.css"
const Home = () => {

  return (
    <>
      <HomeBanner />

      {/* Home Banner */}
      <div className="homeBanner py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
               <div className="info rounded">
                  <h2> Bacola Natural Foods </h2>
                  <div className="product-name">
                    <h3> Special Organic </h3>
                    <h1> Roats Burger </h1>
                  </div>
                  <div className="price">
                    <p> only-from </p>
                    <h4> $14.99 </h4>
                  </div>
               </div>
            </div>
            <div className="col-sm-9 product-row ">
               <div className="product-slider">
                  <div className="product-header">
                     <div>
                        <h2> BEST SELLERS </h2>
                        <p> Do not miss the current offers until the end of   March. </p>
                    </div>
                    <button className="view-all-btn"> View All <span> <FaArrowRightLong /> </span></button>
                  </div>

                  <div className="product_row_all mt-4">

                  <Swiper
                      slidesPerView={4}
                      spaceBetween={10}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[ Navigation]}
                      className="mySwiper"
                    >
                          <SwiperSlide>
                              <div className="item product-item ">
                                <div className="imagewrapper">
                                  <img src={product} alt="product" />
                                  <div className="discount">
                                      <span> 10% </span>
                                  </div>
                                </div>
                                <div className="all-details">
                                    <Link href="#"> Field Roast Chao Cheese Creamy Original </Link>
                                      <p> In Stock </p>
                                     <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                                    <div className="price-total">
                                        <span className="delete-price"> $24.00 </span>
                                        <span className="regular-price"> $19.50 </span>
                                    </div>
                                    <Link href="#" className="cart-btn"> Add to cart </Link>
                                </div>
                               
                            </div>
                          </SwiperSlide>
                          
                          <SwiperSlide>
                              <div className="item product-item ">
                                <div className="imagewrapper">
                                  <img src={product} alt="product" />
                                  <div className="discount">
                                      <span> 10% </span>
                                  </div>
                                </div>
                                <div className="all-details">
                                    <Link href="#"> Field Roast Chao Cheese Creamy Original </Link>
                                      <p> In Stock </p>
                                     <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                                    <div className="price-total">
                                        <span className="delete-price"> $24.00 </span>
                                        <span className="regular-price"> $19.50 </span>
                                    </div>
                                    <Link href="#" className="cart-btn"> Add to cart </Link>
                                </div>
                               
                            </div>
                          </SwiperSlide>
                         
                          <SwiperSlide>
                              <div className="item product-item ">
                                <div className="imagewrapper">
                                  <img src={product} alt="product" />
                                  <div className="discount">
                                      <span> 10% </span>
                                  </div>
                                </div>
                                <div className="all-details">
                                    <Link href="#"> Field Roast Chao Cheese Creamy Original </Link>
                                      <p> In Stock </p>
                                     <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                                    <div className="price-total">
                                        <span className="delete-price"> $24.00 </span>
                                        <span className="regular-price"> $19.50 </span>
                                    </div>
                                    <Link href="#" className="cart-btn"> Add to cart </Link>
                                </div>
                               
                            </div>
                          </SwiperSlide>
                       
                          <SwiperSlide>
                              <div className="item product-item ">
                                <div className="imagewrapper">
                                  <img src={product} alt="product" />
                                  <div className="discount">
                                      <span> 10% </span>
                                  </div>
                                </div>
                                <div className="all-details">
                                    <Link href="#"> Field Roast Chao Cheese Creamy Original </Link>
                                      <p> In Stock </p>
                                     <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                                    <div className="price-total">
                                        <span className="delete-price"> $24.00 </span>
                                        <span className="regular-price"> $19.50 </span>
                                    </div>
                                    <Link href="#" className="cart-btn"> Add to cart </Link>
                                </div>
                               
                            </div>
                          </SwiperSlide>


                          <SwiperSlide>
                              <div className="item product-item ">
                                <div className="imagewrapper">
                                  <img src={product} alt="product" />
                                  <div className="discount">
                                      <span> 10% </span>
                                  </div>
                                </div>
                                <div className="all-details">
                                    <Link href="#"> Field Roast Chao Cheese Creamy Original </Link>
                                      <p> In Stock </p>
                                     <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                                    <div className="price-total">
                                        <span className="delete-price"> $24.00 </span>
                                        <span className="regular-price"> $19.50 </span>
                                    </div>
                                    <Link href="#" className="cart-btn"> Add to cart </Link>
                                </div>
                               
                            </div>
                          </SwiperSlide>

                          <SwiperSlide>
                              <div className="item product-item ">
                                <div className="imagewrapper">
                                  <img src={product} alt="product" />
                                  <div className="discount">
                                      <span> 10% </span>
                                  </div>
                                </div>
                                <div className="all-details">
                                    <Link href="#"> Field Roast Chao Cheese Creamy Original </Link>
                                      <p> In Stock </p>
                                     <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                                    <div className="price-total">
                                        <span className="delete-price"> $24.00 </span>
                                        <span className="regular-price"> $19.50 </span>
                                    </div>
                                    <Link href="#" className="cart-btn"> Add to cart </Link>
                                </div>
                               
                            </div>
                          </SwiperSlide>
                    </Swiper>
                          
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home




