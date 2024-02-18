import React from 'react';
//@ts-ignore
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Image from '../../Components/Utils/Image';

const ImageBanner: React.FC = () => {

  const Data = [
    {
      id: 1,
      image: "../ServiceDetails/B1.jpg"
    },
    {
      id: 2,
      image: "../ServiceDetails/B2.jpg"
    },
    {
      id: 3,
      image: "../ServiceDetails/B3.jpg"
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
