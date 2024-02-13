import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { DatabaseFilled } from '@ant-design/icons';

const First = ({ data }:any) => {
  return (
    <div className='First'>
      <h5>{data.category}</h5>
      <h1>{data.title}</h1>
      <h6>{data.price} </h6>
      
    </div>
  );
};

export default First;
