import React from 'react';
import Image from '../Utils/Image';
import { ImageBaseURL } from '../../api/config';

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
          <Image src={ImageBaseURL+data?.image}  />
          <span>
            <h5>{data?.name}</h5>
            <h6>{data?.type}</h6>
          </span>
        </div>
        <Image src="../Reviews/review.svg"  />
      </div>
      <p>{data?.review}</p>
    </div>
  );
};

export default ReviewCard;
