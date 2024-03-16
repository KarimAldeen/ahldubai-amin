import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import DoctorCard from './DoctorCard';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { MultyPageData } from '../../../Data';



const CardSwiper= ({data}:any) => {
  return (
    <div >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
      
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay ]}
        autoplay={{ delay: 4000 }}
      navigation
      onSwiper={(swiper:any) => console.log(swiper)}
        className='Docor_Cards'
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