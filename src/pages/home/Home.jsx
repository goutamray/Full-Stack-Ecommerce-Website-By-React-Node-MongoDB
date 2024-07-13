
// import components
import HomeBanner from "../../components/homeBanner/HomeBanner"
import ProductItem from "../../components/productItem/ProductItem";
import CategorySlider from "../../components/category/CategorySlider";

// react icons 
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

// images 
import man from "../../assets/avater/avatar.jpg"
import coupon from "../../assets/banner/coupon.png"

import "./Home.css"
const Home = () => {

  return (
    <>
      <HomeBanner />

      {/* cat slider  */}
      <CategorySlider />

      {/* Home Banner */}
      <div className="homeBanner py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
               <div className="sticky">
                     <div className="info rounded">
                        <h2> Bacola Natural Foods </h2>
                        <div className="product-name">
                        <h3> Special Organic </h3>
                        <h1> Roats Burger </h1>
                        </div>
                        <div className="price mt-1">
                        <p> only-from </p>
                        <h4> $14.99 </h4>
                        </div>
                     </div>

                     <div className="data-all rounded">
                        <h2> Best Bakery Products </h2>
                        <div className="product-name">
                        <h3 className="fresh"> Freshest Products </h3>
                        <h1> every hour. </h1>
                        </div>
                        <div className="price mt-1">
                        <p> only-from </p>
                        <h4> $24.99 </h4>
                        </div>
                        <button> Shop Now</button>
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
                             <ProductItem />
                          </SwiperSlide>

                          <SwiperSlide>
                             <ProductItem />
                          </SwiperSlide>

                          <SwiperSlide>
                             <ProductItem />
                          </SwiperSlide>

                          <SwiperSlide>
                             <ProductItem />
                          </SwiperSlide>

                          <SwiperSlide>
                             <ProductItem />
                          </SwiperSlide>

                          <SwiperSlide>
                             <ProductItem />
                          </SwiperSlide>
                          
                          
                    </Swiper>
                          
                  </div>
               </div>

               {/* new products */}
               <div className="product-slider mt-5">
                  <div className="product-header">
                     <div>
                        <h2> NEW PRODUCTS </h2>
                        <p> New products with updated stocks. </p>
                    </div>
                    <button className="view-all-btn"> View All <span> <FaArrowRightLong /> </span></button>
                  </div>

                  <div className="product_row_all product-row2 mt-4 d-flex ">
                             <ProductItem />
                             <ProductItem />
                             <ProductItem />
                             <ProductItem />
                             <ProductItem />                      
                             <ProductItem />                      
                             <ProductItem />                      
                             <ProductItem />                      
                                               
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* comment section */}
      <div className="comment-section">
         <div className="container">
            <h2> Client Comments </h2>
            <div className="row">
               <div className="col-sm-3">
                  <div className="comment-data">
                     <h4 > The Best Marketplace </h4>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
                      <div className="client">
                        <img src={man} alt="" />
                        <div className="name-data">
                           <h4> Tina Mcdonnell </h4>
                           <p> Sales Manager </p>
                        </div>
                      </div>
                  </div>
               </div>
               <div className="col-sm-9">
                  <div className="product-banner">
                     <div className="data-all-product rounded">
                        <h2> Weekend Discount 40% </h2>
                        <div className="product-name">
                        <h3 className="fresh"> Legumes & Cereals </h3>
                        <p> Feed your family the best  </p>
                        </div>
                        <button> Shop Now</button>
                     </div>
                     <div className="data-all-product2 rounded">
                        <h2> Weekend Discount 40%  </h2>
                        <div className="product-name">
                        <h3 className="fresh"> Dairy & Eggs </h3>
                        <p>A different kind of grocery store  </p>
                        </div>   
                        <button> Shop Now</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="newsletter">
         <div className="container">
            <div className="row news-row">
               <div className="col-sm-6">
                 <div className="newleter-content">
                    <h4> $20 discount for your first order </h4>
                    <h1> Join our newsletter and get... </h1>
                    <p> Join our email subscription now to get updates on promotions and coupons. </p>
                    <div className="news-btn">
                     <span> <CiMail /> </span>
                      <input type="text" placeholder="Your email address"/>
                      <button> Subscribe </button>
                    </div>
                 </div>
               </div>
               <div className="col-sm-6">
                  <div className="newsleter-image">
                     <img src={coupon} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Home




