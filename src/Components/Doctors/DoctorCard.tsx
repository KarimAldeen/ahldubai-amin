import React from 'react'
import { Link } from 'react-router-dom'
import useImageError from '../../Hooks/useImageError'
import { MdArrowOutward } from "react-icons/md";
import { ImageBaseURL } from '../../api/config';
import Image from '../Utils/Image';

const DoctorCard = ({data}:any) => {
  return (
    <div className='DoctorCard'>
            <Image src={ImageBaseURL+data?.image} />
            <h1>
            {data?.name}
            </h1>
            <h5>
            {data?.type}
            </h5>
            <p>
            {data?.description}
            </p>
            <Link to={`/doctors/${data?.id}`}>
                Read More <MdArrowOutward />
            </Link>
    </div>
  )
}

export default DoctorCard