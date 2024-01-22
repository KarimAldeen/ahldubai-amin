import React from 'react'
import { Link } from 'react-router-dom'
import useImageError from '../../Hooks/useImageError'
import { MdArrowOutward } from "react-icons/md";

const DoctorCard = ({data}:any) => {
  return (
    <div className='DoctorCard'>
            <img src={data?.Image} onError={useImageError} alt="ss" />
            <h1>
            {data?.name}
            </h1>
            <h5>
            {data?.Category}
            </h5>
            <p>
            {data?.Summary}
            </p>
            <Link to={`/doctors/${data?.id}`}>
                Read More <MdArrowOutward />
            </Link>
    </div>
  )
}

export default DoctorCard