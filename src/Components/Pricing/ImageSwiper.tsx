import React from 'react';
//@ts-ignore
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from '../Utils/Image';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const ImageBanner: React.FC = () => {

  const Data = [
    {
      id: 1,
      image: "../PricingDetails/1.webp"
    },
    {
      id: 2,
      image: "../PricingDetails/1.webp"
    },
    {
      id: 3,
      image: "../PricingDetails/1.webp"
    }
  ]
  return (
    <Swiper className='ImageSwiper'
      freeMode={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{ delay: 4000 }}
      navigation
      pagination={{ clickable: true }}

    >

      {Data?.map((item: any) => {
        return (
          <SwiperSlide className='SwiperSlide' key={item?.id}>
            <Image src={item?.image} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default ImageBanner;
