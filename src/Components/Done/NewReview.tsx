import React from 'react';
import CardSwiper from '../SwiperReview/CardSwiper';
import { useTranslation } from 'react-i18next';

const Review = ({data}:any) => {

    const [t] = useTranslation()
  return (
    <div className='Review' id='Reviews'>
      {data.map((review:any, index:any) => (
        <div key={index}>
          <h6> - {t("Testimonial")}</h6>
          <h1>{t("What patients are saying!")}</h1>
          <CardSwiper data={review.cardData} />
        </div>
      ))}
    </div>
  );
};

export default Review;
