
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';



const CategorySlider = () => {
  return (
    <div className="cat-slider py-5">
       <div className="container">
           <div className="row">
             <div className="col">
             <Swiper
                      slidesPerView={10}
                      spaceBetween={0}
                      slidesPerGroup={1}
                      navigation={true}
                      modules={[ Navigation]}
                      className="mySwiper"
                    >
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="item">
                                 <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                 <h6 className='text-center'> Red Apple </h6>
                              </div>
                          </SwiperSlide>
                    </Swiper>
             </div>
           </div>
       </div>
    </div>
  )
}

export default CategorySlider
