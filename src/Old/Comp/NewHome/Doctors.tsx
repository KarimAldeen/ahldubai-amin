import React from 'react'
import CardSwiper from '../../../Components/SwiperDoctor/CardSwiper'
import { Select } from 'antd';


const Doctors = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
  return (
    <div className='Doctors'>

      <div className='Doctors_Header'>
        <p>From The Blog</p>
     <h1>      Latest Update</h1>
      </div>
      <CardSwiper/>
    </div>
  )
}

export default Doctors