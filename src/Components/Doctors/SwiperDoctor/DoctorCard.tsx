import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import useImageError from '../../../Hooks/useImageError';
import Image from '../../Utils/Image';
import { ImageBaseURL } from '../../../api/config';

const DoctorCard = ({data}:any) => {
  const navigate = useNavigate()

  return (
    <div className='DoctorCard'>
            <Image src={ImageBaseURL+data?.image}  />
            <h1>
            {data?.name}
            </h1>
            <h5>
            {data?.type}
            </h5>
            <p>
            {data?.description}
            </p>
            <Link  to={`/doctors/${data?.id}`}>
                Read More <MdArrowOutward />
            </Link>
    </div>
  )
}

export default DoctorCard