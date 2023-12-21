import React from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import ReviewCard from '../ReviewCard';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const CardSwiper: React.FC= () => {
  return (
    <div className='CardSwiper'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay ]}
        autoplay={{ delay: 1000 }}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper:any) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

        className="mySwiper"
      >
        {
          [1,2,3,4,5,6,7,8]?.map((item:any,index:number)=>{
            return(
              <SwiperSlide key={index}>
                <ReviewCard index={index}/>
                </SwiperSlide>

            )
          })
        }

      </Swiper>
    </div>
  );
}

export default CardSwiper;