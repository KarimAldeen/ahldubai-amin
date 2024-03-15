import React from 'react';
import CardSwiper from '../SwiperReview/CardSwiper';
import { useTranslation } from 'react-i18next';

const Review = ({data}:any) => {

    const [t] = useTranslation()
  return (
    <div className='Review' id='Reviews'>
        <div >
          <h6> - {t("Testimonial")}</h6>
          <h1>{t("What patients are saying!")}</h1>
          <CardSwiper data={data} />
        </div>
   
    </div>
  );
};

export default Review;
