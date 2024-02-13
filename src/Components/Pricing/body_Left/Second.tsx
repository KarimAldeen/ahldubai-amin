import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Second = ({ data }:any) => {
  return (
    <div className='Second'>
      <img src={data.image} alt="" />
      <div>
        <h1>{data.heading}</h1>
        <p>{data.description}</p>
        <div className="services-list">
          {data.services.map((item:any, index:any) => (
            <div key={index} className="service-item">
              <FaCheck />
              <h6>{item.name}</h6>
            </div>
          ))}
        </div>
        <p>{data.additionalDescription}</p>
      </div>
    </div>
  );
};

export default Second;
