import React from 'react';
//@ts-ignore
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Image from '../../Components/Utils/Image';
import { ImageBaseURL } from '../../api/config';

const ImageBanner = ({data}:any) => {

  return (
    <Swiper className='ImageSwiper'
      freeMode={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{ delay: 4000 }}
      navigation
      pagination={{ clickable: true }}

    >

      {data?.map((item: any) => {
        return (
          <SwiperSlide className='SwiperSlide' key={item?.id}>
            <Image src={ImageBaseURL+ item?.image} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default ImageBanner;
