import React from 'react'
import {  useNavigate } from 'react-router-dom'
import Image from '../Utils/Image';
import { ImageBaseURL } from '../../api/config';
import { FaEye } from 'react-icons/fa';

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
            <span className='Navigate_icon'>
            <FaEye onClick={()=> navigate(`/doctors/${data?.id}`)}  />

            </span>
      </div>
  )
}

export default DoctorCard