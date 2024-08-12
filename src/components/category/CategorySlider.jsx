
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { useState } from 'react';
import { Navigation } from 'swiper/modules';

const CategorySlider = () => {

   // background 
   const [itemBg, setItemBg ] = useState([
    "#f2fce4",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
  ])

  return (
    <div className="cat-slider py-5">
       <div className="container">
        <h3 className='mb-4 '> Featured Categories </h3>
           <div className="row">
             <div className="col">
             <Swiper
                      slidesPerView={10}
                      spaceBetween={10}
                      slidesPerGroup={1}
                      navigation={true}
                      breakpoints={{
                        340: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 5,
                          spaceBetween: 50,
                        },
                      }}
                      modules={[ Navigation]}
                      className="mySwiper-data"
                    >
                        {
                            itemBg?.map((item, index) => {
                             return <SwiperSlide key={index} >
                                <div className="item" style={{ background : item}}>
                                   <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
                                   <h6 className='text-center'> Red Apple </h6>
                                </div>
                            </SwiperSlide>
                            })
                        }
                         
                    </Swiper>
             </div>
           </div>
       </div>
    </div>
  )
}

export default CategorySlider
