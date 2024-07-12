import HomeBanner from "../../components/homeBanner/HomeBanner"
import { FaArrowRightLong } from "react-icons/fa6";



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


import "./Home.css"
import ProductItem from "../../components/productItem/ProductItem";
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home




