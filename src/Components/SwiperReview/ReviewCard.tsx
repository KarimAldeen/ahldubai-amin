import React from 'react'
import { Link } from 'react-router-dom'
import useImageError from '../../Hooks/useImageError'
import { MdArrowOutward } from "react-icons/md";

const ReviewCard = ({activeIndex,index}:any) => {
  return (
    <div className={activeIndex === index ? 'ActiveReviewCard ReviewCard' : 'ReviewCard' } >
           <div>
            <div>
              <img src="../Reviews/2.png" alt="" />
              <span>
                <h5>Carry Malan</h5>
                <h6>Happy Partner</h6>
              </span>
            </div>
            <img src="../Home/review.svg" alt="" />
           </div>
           <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Harum, tempora commodi iure odio architecto maxime.
           </p>
    </div>
  )
}

export default ReviewCard