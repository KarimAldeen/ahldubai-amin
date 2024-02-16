import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function Coverflow({ data, setActive }: any) {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper EffectCoverflow"
            onSlideChange={(swiper: any) => {
                console.log('slide change', swiper?.activeIndex);
                setActive([data[swiper?.activeIndex]])
            }}
            initialSlide={1}
            draggable={false}
        >
            {data.map((product: any, index: any) => (
                <SwiperSlide key={index} className='SwiperSlide'>
                    {/* <img src={product.image} alt={product.title} />
                    <div  className='SwiperInfo'>
                        <h1>{product.title}</h1>
                    </div> */}
                    <div className='CategorieCard'>
                        <img src={product.image} alt={product.title} />                    <h1>{product.title}</h1>
                        <p>{product?.subTitle}</p>
                        {/* <h4>{product.price}$</h4> */}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
