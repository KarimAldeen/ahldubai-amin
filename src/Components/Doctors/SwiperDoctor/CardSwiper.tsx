import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import DoctorCard from '../DoctorCard';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { MultyPageData } from '../../../Data';



const CardSwiper= ({data}:any) => {
  return (
    <div >
      <Swiper
        freeMode={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          2000: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay ]}
        autoplay={{ delay: 4000 }}
        navigation
        className='Docor_Cards'
        dir='ltr'
      >
        {
          data?.map((item:any,index:number)=>{
            return(
              <SwiperSlide key={index}>
                <DoctorCard data={item}/>
                </SwiperSlide>

            )
          })
        }

      </Swiper>
    </div>
  );
}

export default CardSwiper;