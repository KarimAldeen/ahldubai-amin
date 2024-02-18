import React from 'react';
import CardSwiper from '../SwiperReview/CardSwiper';

const Review = ({data}:any) => {

  return (
    <div className='Review' id='Reviews'>
      {data.map((review:any, index:any) => (
        <div key={index}>
          <h6>{review.title}</h6>
          <h1>{review.info}</h1>
          <CardSwiper data={review.cardData} />
        </div>
      ))}
    </div>
  );
};

export default Review;
