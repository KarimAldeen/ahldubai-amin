import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import useImageError from '../../../Hooks/useImageError';

const DoctorCard = ({data}:any) => {
  const navigate = useNavigate()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/doctors/${data?.id}")
  };

  return (
    <div className='DoctorCard'>
            <img src={data?.Image} onError={useImageError} alt="" />
            <h1>
            {data?.name}
            </h1>
            <h5>
            {data?.Category}
            </h5>
            <p>
            {data?.Summary}
            </p>
            <Link  to={`/doctors/${data?.id}`}>
                Read More <MdArrowOutward />
            </Link>
    </div>
  )
}

export default DoctorCard