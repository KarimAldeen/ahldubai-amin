import React from 'react';

interface Props {
  activeIndex: number;
  index: number;
  data : any

}

const ReviewCard: React.FC<Props> = ({ activeIndex, index, data }) => {
  return (
    <div className={activeIndex === index ? 'ActiveReviewCard ReviewCard' : 'ReviewCard'}>
      <div>
        <div>
          <img src={data?.image} alt="" />
          <span>
            <h5>{data?.name}</h5>
            <h6>{data?.role}</h6>
          </span>
        </div>
        <img src="../Reviews/review.svg" alt="" />
      </div>
      <p>{data?.review}</p>
    </div>
  );
};

export default ReviewCard;
