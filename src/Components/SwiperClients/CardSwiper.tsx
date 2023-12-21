import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import ClientCard from './ClientCard';




const CardSwiper: React.FC= () => {
  return (
    <div className='CardSwiper'>
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
          [1,2,3,4,5,6,7,8]?.map((item:any,index:number)=>{
            return(
              <SwiperSlide key={index}>
                <ClientCard/>
                </SwiperSlide>

            )
          })
        }

      </Swiper>
    </div>
  );
}

export default CardSwiper;