import ProductItem from "../../../components/productItem/ProductItem"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';



import "./ProductRelated.css"
const RelatedProduct = ( { title }) => {

  return (
    <>
        <div className="related-Product ">
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="product-slider">
                  <div className="product-header">
                     <div>
                        <h2> { title } </h2>
                    </div>
                  </div>

                  <div className="product_row_all mt-4">
                      <Swiper
                          slidesPerView={5}
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

export default RelatedProduct




